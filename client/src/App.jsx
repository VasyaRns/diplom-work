import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './components/FeedPage';
import SportsPage from './components/SportsPage.jsx'
import MainPage from './components/MainPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/news/:feedName" element={<FeedPage/>} />
                <Route path="/sports/:sportsName" element={<SportsPage/>} />
            </Routes>
        </Router>
    );
};

export default App;