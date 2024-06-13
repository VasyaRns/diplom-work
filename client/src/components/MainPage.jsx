import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const MainPage = () => {
    const [feeds, setFeeds] = useState({ news: [], sports: [] });
    const [selectedFeed, setSelectedFeed] = useState('');

    useEffect(() => {
        const fetchFeeds = async () => {
            const response = await fetch('https://diplom-work-1.onrender.com/api');
            const data = await response.json();
            setFeeds(data);
        };
        fetchFeeds();
    }, []);

    const handleFeedClick = (feed) => {
        setSelectedFeed(feed);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Список лент</h1>
            <h2 className="text-2xl font-bold mb-4">Новости</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {feeds.news.map((feed) => (
                    <Link
                        to={`/news/${feed.name}`}
                        key={feed.name}
                        className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center"
                        onClick={() => handleFeedClick(feed.name)}
                    >
                        <h2 className="text-2xl font-bold">{feed.title}</h2>
                    </Link>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mb-4">Спорт</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {feeds.sports.map((feed) => (
                    <Link
                        to={`/sports/${feed.name}`}
                        key={feed.name}
                        className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center"
                        onClick={() => handleFeedClick(feed.name)}
                    >
                        <h2 className="text-2xl font-bold">{feed.title}</h2>
                    </Link>
                ))}
            </ul>
            </div>

            );
            };

export default MainPage;
