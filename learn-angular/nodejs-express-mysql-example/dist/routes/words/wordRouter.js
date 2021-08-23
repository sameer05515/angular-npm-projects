"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordRouter = void 0;
const express_1 = __importDefault(require("express"));
const wordModel = __importStar(require("../../models/words/word"));
const wordRouter = express_1.default.Router();
exports.wordRouter = wordRouter;
wordRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    wordModel.findAll((err, words) => {
        if (err) {
            return res.status(500).json({ "errorMessage": err.message });
        }
        res.status(200).json({ "data": words });
    });
}));
wordRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = req.body;
    wordModel.create(newTask, (err, wordId) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "wordId": wordId });
    });
}));
wordRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wordId = Number(req.params.id);
    wordModel.findOne(wordId, (err, word) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).json({ "data": word });
    });
}));
wordRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const word = req.body;
    wordModel.update(word, (err) => {
        if (err) {
            return res.status(500).json({ "message": err.message });
        }
        res.status(200).send();
    });
}));
