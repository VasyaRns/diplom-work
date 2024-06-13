// FeedComponent.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeedItem from './FeedItem';
import Spinner from '../icons/Spinner';

const FeedComponent = ({ feed }) => {
    const [displayedItems, setDisplayedItems] = useState(20);
    const [loading, setLoading] = useState(true);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            setDisplayedItems((prevDisplayedItems) => prevDisplayedItems + 20);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setLoading(false);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto py-8 flex flex-col">
            <Link
                to="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-start"
            >
                Назад
            </Link>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <h1 className="mb-4 text-4xl">{feed.description}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {feed.items.slice(0, displayedItems).map((item, index) => (
                            <FeedItem key={index} item={item} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default FeedComponent;
