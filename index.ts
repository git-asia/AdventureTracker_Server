import express from "express";
import cors from "cors";
import "express-async-errors";

const app = express();

app.use(cors( {
    origin: 'http://localhost:3000',
}));

app.listen(3002, '0.0.0.0', () => {
    console.log('Listening on port http://localhost:3002');
});