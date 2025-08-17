// src/components/Home.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTracks, deleteTrack } from '../services/trackService';
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      const data = await getTracks();
      setTracks(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    await deleteTrack(id);
    fetchTracks();
  };

  return (
    <div>
      <button onClick={() => navigate('/add-track')}>Add New Track</button>
      <TrackList
        tracks={tracks}
        onDelete={handleDelete}
        onPlay={setNowPlaying}
      />
      {nowPlaying && <NowPlaying track={nowPlaying} />}
    </div>
  );
};

export default Home;
