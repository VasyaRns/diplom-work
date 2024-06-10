import express from 'express';
import feedUrls from "../urls/feedUrls.js";
import sportsUrls from "../urls/sportsUrls.js";
import {fetchData} from "../utils/fetchData.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const news = await fetchData(feedUrls);
        const sports = await fetchData(sportsUrls);

        const response = {
            news,
            sports
        };

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении ленты' });
    }
});

export default router;