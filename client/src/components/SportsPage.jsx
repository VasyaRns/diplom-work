import{ useEffect, useState } from 'react';
import FeedComponent from './FeedComponent';
import {useParams} from "react-router-dom";
import {SvgSpinner} from '../icons/spinner.jsx'


const SportsPage = () => {
    const [feed, setFeed] = useState('');
    const { sportsName } = useParams();

    useEffect(() => {
        const fetchFeed = async () => {
            const response = await fetch(`https://diplom-work-1.onrender.com/api/sports/${sportsName}`);
            const data = await response.json();
            setFeed(data);
        };
        fetchFeed();
    }, [sportsName]);

    if (!feed) {
        return <SvgSpinner/>;
    }

    return <FeedComponent feed={feed} />;
};

export default SportsPage;