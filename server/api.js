import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import feedRouter from './routes/feed.js';

const app = express();
const PORT = 3001;

morgan.token('host', function (req, res) {
    return req.hostname;
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host'));
app.use(cors());

app.use('/', indexRouter);
app.use('/', feedRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});