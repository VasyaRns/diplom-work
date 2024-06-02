import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {SvgSpinner} from '../icons/spinner.jsx'

const MainPage = () => {
    const [feeds, setFeeds] = useState([]);
    const [selectedFeed, setSelectedFeed] = useState('');

    useEffect(() => {
        const fetchFeeds = async () => {
            const response = await fetch('http://localhost:3001/');
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
            <h1 className="text-2xl font-bold mb-4">Список лент</h1>
            {feeds ? '' : <SvgSpinner/>}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feeds.map((feed) => (
                    <li key={feed.name} className="bg-white rounded-lg shadow-md p-4">
                        {feed.image && <img src={  feed.image ? feed.image.url : ''} className="w-full object-cover mb-4" alt ={feed.title}/>}
                        <Link to={`/${feed.name}`} className="text-blue-500 hover:underline" onClick={() => handleFeedClick(feed.name)}>{feed.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;