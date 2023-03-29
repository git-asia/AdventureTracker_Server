import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleError} from "./utils/errors";

const app = express();

app.use(cors( {
    origin: 'http://localhost:3000',
}));

app.use(json());
app.use(handleError);

app.get('/', (req, res) => {
    res.send({
        is: 'working!!! 🥳'
    });
})

// app.get('/', async (req, res, next) => {
//     throw new Error('😱 We have an error!');
// });

app.listen(3300, 'localhost', () => {
    console.log('Listening on port http://localhost:3300');
});
