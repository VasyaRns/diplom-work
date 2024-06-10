import parser from '../parser.js';


export const fetchData = async (urls) => {
    return Promise.all(Object.keys(urls).map(async (link) => {
        const feed = await parser.parseURL(urls[link]);
        const { items, ...rest } = feed;
        return { name: link, ...rest };
    }));
};