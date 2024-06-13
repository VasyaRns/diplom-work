import{ useEffect, useState } from 'react';
import FeedComponent from './FeedComponent';
import {useParams} from "react-router-dom";


const FeedPage = () => {
    const [feed, setFeed] = useState('');
    const { feedName } = useParams();

    useEffect(() => {
        const fetchFeed = async () => {
            const response = await fetch(`https://diplom-work-1.onrender.com/api/news/${feedName}`);
            const data = await response.json();
            setFeed(data);
        };
        fetchFeed();
    }, [feedName]);


    return <FeedComponent feed={feed} />;
};

export default FeedPage;