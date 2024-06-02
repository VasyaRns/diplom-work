import { BrowserRouter as Router, Link, Route, Routes, useParams } from 'react-router-dom';import FeedPage from './components/FeedPage';
import MainPage from './components/MainPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:feedName" element={<FeedPage/>} />
            </Routes>
        </Router>
    );
};

export default App;