import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import * as bodyParser from "body-parser";
import {orderRouter} from "./routes/orders/orderRouter";
import {taskRouter} from "./routes/tasks/taskRouter";
import {wordRouter} from "./routes/words/wordRouter";

const app = express();
dotenv.config();

const allowedOrigins = ['http://localhost:3000','http://localhost:4200'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
// Then pass these options to cors:
app.use(cors(options));
// app.use(cors); /* NEW */
app.use(express.json());

app.use(bodyParser.json());
app.use("/orders", orderRouter);
app.use("/tasks",taskRouter);
app.use("/words",wordRouter);

app.listen(process.env.PORT, () => {
console.log("Node server started running. \n  Appication can be accessed on http://localhost:"+process.env.PORT);
});