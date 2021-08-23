import express, { Request, Response } from "express";
import * as wordModel from "../../models/words/word";
import { Word, WordForList, WordToSave } from "../../types/words/word";

const wordRouter = express.Router();

wordRouter.get("/", async (req: Request, res: Response) => {
    wordModel.findAll((err: Error, words: WordForList[]) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }

        res.status(200).json({ "data": words });
    });
});

wordRouter.post("/", async (req: Request, res: Response) => {
    const newTask: WordToSave = req.body;
    wordModel.create(newTask, (err: Error, wordId: number) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }

        res.status(200).json({ "wordId": wordId });
    });
});

wordRouter.get("/:id", async (req: Request, res: Response) => {
    const wordId: number = Number(req.params.id);
    wordModel.findOne(wordId, (err: Error, word: Word) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": word });
    })
});

wordRouter.put("/:id", async (req: Request, res: Response) => {
    const word: Word = req.body;
    wordModel.update(word, (err: Error) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }

        res.status(200).send();
    })
});

export { wordRouter };