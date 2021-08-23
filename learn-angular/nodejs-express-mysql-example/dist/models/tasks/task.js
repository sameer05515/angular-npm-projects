"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.findAll = exports.findOne = exports.create = void 0;
const db_1 = require("../../db");
const create = (task, callback) => {
    const queryString = "INSERT INTO t_tasks (title, description) VALUES (?, ?)";
    db_1.tasksDBObj.query(queryString, [task.title, task.description], (err, result) => {
        if (err) {
            callback(err);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
const findOne = (orderId, callback) => {
    const queryString = `
      SELECT 
        t.id as id,
        t.description as description,
        t.title as title,
        t.created as created
      FROM t_tasks AS t
      WHERE t.id=?`;
    db_1.tasksDBObj.query(queryString, orderId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const order = {
            id: row.id,
            title: row.title,
            description: row.description,
            created: row.created
        };
        callback(null, order);
    });
};
exports.findOne = findOne;
const findAll = (callback) => {
    const queryString = `
    SELECT 
    t.id as id,
    t.description as description,
    t.title as title,
    t.created as created
  FROM t_tasks AS t`;
    db_1.tasksDBObj.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const orders = [];
        rows.forEach(row => {
            const order = {
                id: row.id,
                title: row.title
            };
            orders.push(order);
        });
        callback(null, orders);
    });
};
exports.findAll = findAll;
const update = (task, callback) => {
    const queryString = `UPDATE t_tasks SET title=?, description=? WHERE id=?`;
    db_1.tasksDBObj.query(queryString, [task.title, task.description, task.id], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
