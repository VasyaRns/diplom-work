import { Link } from 'react-router-dom';
import DefaultImage from '../../public/News_AdobeStock_116225048_neu-e3258923.jpg';


const FeedItem = ({ item }) => (
    <Link key={item.link} to={item.link} className="block">
        <div className="block bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <img
                src={item.enclosure ? item.enclosure.url : DefaultImage}
                alt={item.title}
                className="w-full h-64 object-cover mb-4"
            />
            <a href={item.link} className="text-lg font-bold">
                {item.title}
            </a>
            {item.contentSnippet && <p className="mt-2">{item.contentSnippet}</p>}
        </div>
    </Link>
);

export default FeedItem;