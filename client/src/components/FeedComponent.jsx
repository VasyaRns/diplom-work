import React from 'react';
import {Link} from "react-router-dom";


const FeedComponent = ({ feed }) => {
    return (
        <div className="container mx-auto py-8">
            <Link to="/" className="text-blue-500 hover:underline">Назад</Link>
            <h2 className="text-2xl font-bold mb-4">{feed.title}</h2>
            <p className="mb-4">{feed.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feed.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                        {item.enclosure && <img src={ item.enclosure ? item.enclosure.url : ''} alt={item.title} className="w-full h-64 object-cover mb-4" />}
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        {item.contentSnippet && <p className="mt-2">{item.contentSnippet}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedComponent;