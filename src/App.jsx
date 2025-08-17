import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TrackForm from './components/TrackForm';

const App = () => {
  return (
    <div className="app-container">
      <h1>Reactville Jukebox 🎶</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm />} />
      </Routes>
    </div>
  );
};

export default App;
