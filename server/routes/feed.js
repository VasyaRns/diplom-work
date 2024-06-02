import express from 'express';
import parser from '../parser.js';
import urls from '../urls.js';

const router = express.Router();

router.get('/:feedName', async (req, res) => {
    const feedName = req.params.feedName;
    if (urls[feedName]) {
        try {
            const feed = await parser.parseURL(urls[feedName]);
            res.json(feed);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении ленты' });
        }
    } else {
        res.status(404).json({ error: 'Лента не найдена' });
    }
});

export default router;