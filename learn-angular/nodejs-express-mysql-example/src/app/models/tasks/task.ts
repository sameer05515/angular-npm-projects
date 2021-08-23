import { tasksDBObj } from "../../db";

import { OkPacket, RowDataPacket } from "mysql2";
import { Task, TaskForList, TaskToSave } from "../../types/tasks/task";

export const create = (task: TaskToSave, callback: Function) => {
    const queryString = "INSERT INTO t_tasks (title, description) VALUES (?, ?)"

    tasksDBObj.query(
        queryString,
        [task.title, task.description],
        (err, result) => {
            if (err) { callback(err) };

            const insertId = (<OkPacket>result).insertId;
            callback(null, insertId);
        }
    );
};

export const findOne = (orderId: number, callback: Function) => {

    const queryString = `
      SELECT 
        t.id as id,
        t.description as description,
        t.title as title,
        t.created as created
      FROM t_tasks AS t
      WHERE t.id=?`

    tasksDBObj.query(queryString, orderId, (err, result) => {
        if (err) { callback(err) }

        const row = (<RowDataPacket>result)[0];
        const order: Task = {
            id: row.id,
            title: row.title,
            description: row.description,
            created: row.created
        }
        callback(null, order);
    });
};

export const findAll = (callback: Function) => {
    const queryString = `
    SELECT 
    t.id as id,
    t.description as description,
    t.title as title,
    t.created as created
  FROM t_tasks AS t`

    tasksDBObj.query(queryString, (err, result) => {
        if (err) { callback(err) }

        const rows = <RowDataPacket[]>result;
        const orders: TaskForList[] = [];

        rows.forEach(row => {
            const order: TaskForList = {
                id: row.id,
                title: row.title
            }
            orders.push(order);
        });
        callback(null, orders);
    });
};

export const update = (task: Task, callback: Function) => {
    const queryString = `UPDATE t_tasks SET title=?, description=? WHERE id=?`;
  
    tasksDBObj.query(
      queryString,
      [task.title, task.description, task.id],
      (err, result) => {
        if (err) {callback(err)}
        callback(null);
      }
    );
  }