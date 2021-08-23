import express, { Request, Response } from "express";
import * as taskModel from "../../models/tasks/task";
import { Task, TaskForList, TaskToSave } from "../../types/tasks/task";
// import { Order, BasicOrder } from "../../types/orders/order";
const taskRouter = express.Router();

taskRouter.get("/", async (req: Request, res: Response) => {
    taskModel.findAll((err: Error, tasks: TaskForList[]) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }

        res.status(200).json({ "data": tasks });
    });
});

taskRouter.post("/", async (req: Request, res: Response) => {
    const newTask: TaskToSave = req.body;
    taskModel.create(newTask, (err: Error, taskId: number) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }

        res.status(200).json({ "taskId": taskId });
    });
});

taskRouter.get("/:id", async (req: Request, res: Response) => {
    const taskId: number = Number(req.params.id);
    taskModel.findOne(taskId, (err: Error, task: Task) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": task });
    })
});

taskRouter.put("/:id", async (req: Request, res: Response) => {
    const task: Task = req.body;
    taskModel.update(task, (err: Error) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }

        res.status(200).send();
    })
});

export { taskRouter };