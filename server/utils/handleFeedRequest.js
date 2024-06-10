import parser from '../parser.js';

export const handleFeedRequest = async (req, res, urls) => {
    const name = req.params.name;
    if (urls[name]) {
        try {
            const feed = await parser.parseURL(urls[name]);
            res.json(feed);
        } catch (error) {
            res.status(500).json({ error: 'Ошибка при получении ленты' });
        }
    } else {
        res.status(404).json({ error: 'Лента не найдена' });
    }
};
