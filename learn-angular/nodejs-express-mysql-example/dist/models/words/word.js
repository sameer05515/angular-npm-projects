"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.findAll = exports.findOne = exports.create = void 0;
const db_1 = require("../../db");
const create = (word, callback) => {
    const queryString = "INSERT INTO t_word (word, type,details,unique_name) VALUES (?, ?,?,?)";
    db_1.wordsDBObj.query(queryString, [word.word, word.type, word.details, word.uniqueName], (err, result) => {
        if (err) {
            callback(err);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
const findOne = (wordId, callback) => {
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
      WHERE t.id=?`;
    db_1.wordsDBObj.query(queryString, wordId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const order = {
            id: row.id,
            uniqueName: row.uniqueName,
            word: row.word,
            type: row.type,
            details: row.details,
            createdOn: row.createdOn,
            updatedOn: row.updatedOn,
            lastRead: row.lastRead
        };
        callback(null, order);
    });
};
exports.findOne = findOne;
const findAll = (callback) => {
    const queryString = `
    SELECT 
        t.id as id,
        t.unique_name as uniqueName,
        t.word as word
    FROM t_word AS t LIMIT 0,50`;
    db_1.wordsDBObj.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const orders = [];
        rows.forEach(row => {
            const order = {
                id: row.id,
                uniqueName: row.uniqueName,
                word: row.word
            };
            orders.push(order);
        });
        callback(null, orders);
    });
};
exports.findAll = findAll;
const update = (word, callback) => {
    const queryString = `UPDATE t_word SET unique_name=?, word=?,details=?, type=? WHERE id=?`;
    db_1.wordsDBObj.query(queryString, [word.uniqueName, word.word, word.details, word.type, word.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
