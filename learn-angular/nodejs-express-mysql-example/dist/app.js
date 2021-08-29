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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
const orderRouter_1 = require("./routes/orders/orderRouter");
const taskRouter_1 = require("./routes/tasks/taskRouter");
const wordRouter_1 = require("./routes/words/wordRouter");
const app = express_1.default();
dotenv.config();
const allowedOrigins = ['http://localhost:3000',
    'http://localhost:4200',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:4200'];
const options = {
    origin: allowedOrigins
};
// Then pass these options to cors:
app.use(cors_1.default(options));
// app.use(cors); /* NEW */
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use("/orders", orderRouter_1.orderRouter);
app.use("/tasks", taskRouter_1.taskRouter);
app.use("/words", wordRouter_1.wordRouter);
app.listen(process.env.PORT, () => {
    console.log("Node server started running. \n  Appication can be accessed on http://localhost:" + process.env.PORT);
});
