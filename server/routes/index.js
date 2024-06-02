import express from 'express';
import parser from '../parser.js';
import urls from '../urls.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const names = Object.keys(urls);
        const titles = await Promise.all(names.map(async (link) => {
            const feed = await parser.parseURL(urls[link]);
            const { items, ...rest } = feed;
            return rest;
        }));
        const response = names.map((name, index) => ({
            name,
            ...titles[index]
        }));
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении ленты' });
    }
});

export default router;