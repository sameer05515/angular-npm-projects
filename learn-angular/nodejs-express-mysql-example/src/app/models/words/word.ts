import { wordsDBObj } from "../../db";

import { OkPacket, RowDataPacket } from "mysql2";
import { Word, WordForList, WordToSave } from "../../types/words/word";

export const create = (word: WordToSave, callback: Function) => {
    const queryString = "INSERT INTO t_word (word, type,details,unique_name) VALUES (?, ?,?,?)"

    wordsDBObj.query(
        queryString,
        [word.word, word.type, word.details, word.uniqueName],
        (err, result) => {
            if (err) { callback(err) };

            const insertId = (<OkPacket>result).insertId;
            callback(null, insertId);
        }
    );
};

export const findOne = (wordId: number, callback: Function) => {

    const queryString = `
      SELECT 
        t.id as id,
        t.unique_name as uniqueName,
        t.word as word,
        t.type as type,
        t.details as details,
        t.created_on as createdOn,
        t.updated_on as updatedOn,
        t.last_read as lastRead
      FROM t_word AS t
      WHERE t.id=?`

    wordsDBObj.query(queryString, wordId, (err, result) => {
        if (err) { callback(err) }

        const row = (<RowDataPacket>result)[0];
        const order: Word = {
            id: row.id,
            uniqueName: row.uniqueName,
            word: row.word,
            type: row.type,
            details: row.details,
            createdOn: row.createdOn,
            updatedOn: row.updatedOn,
            lastRead: row.lastRead
        }
        callback(null, order);
    });
};

export const findAll = (callback: Function) => {
    const queryString = `
    SELECT 
        t.id as id,
        t.unique_name as uniqueName,
        t.word as word
    FROM t_word AS t LIMIT 0,50`

    wordsDBObj.query(queryString, (err, result) => {
        if (err) { callback(err) }

        const rows = <RowDataPacket[]>result;
        const orders: WordForList[] = [];

        rows.forEach(row => {
            const order: WordForList = {
                id: row.id,
                uniqueName: row.uniqueName,
                word: row.word
            }
            orders.push(order);
        });
        callback(null, orders);
    });
};

export const update = (word: Word, callback: Function) => {
    const queryString = `UPDATE t_word SET unique_name=?, word=?,details=?, type=? WHERE id=?`;

    wordsDBObj.query(
        queryString,
        [word.uniqueName, word.word, word.details, word.type, word.id],
        (err, result) => {
            if (err) { callback(err) }
            callback(null);
        }
    );
}