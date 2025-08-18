import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTracks, deleteTrack } from '../services/trackService';
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    try {
      setLoading(true);
      const data = await getTracks();
      setTracks(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load tracks.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTrack(id);
      fetchTracks();
    } catch {
      alert('Failed to delete track.');
    }
  };

  return (
    <div>
      <button onClick={() => navigate('/add-track')}>Add New Track</button>

      {loading ? (
        <p>Loading tracks...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TrackList
          tracks={tracks}
          onDelete={handleDelete}
          onPlay={setNowPlaying}
        />
      )}

      {nowPlaying && <NowPlaying track={nowPlaying} />}
    </div>
  );
};

export default Home;

