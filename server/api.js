import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.js';
import feedRouter from './routes/feed.js';
import sportsRouter from  './routes/sports.js'

const app = express();
const PORT = process.env.PORT || 3001;

morgan.token('host', function (req, res) {
    return req.hostname;
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host'));
app.use(cors());

app.use('/api', indexRouter);
app.use('/api/news', feedRouter);
app.use('/api/sports', sportsRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});