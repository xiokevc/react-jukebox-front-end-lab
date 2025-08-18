import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createTrack,
  getTrackById,
  updateTrack,
} from '../services/trackService';
import '../styles/TrackForm.css';

const TrackForm = () => {
  const [formData, setFormData] = useState({ title: '', artist: '', album: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { trackId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (trackId) {
      fetchTrack();
    }
  }, [trackId]);

  const fetchTrack = async () => {
    setLoading(true);
    try {
      const track = await getTrackById(trackId);
      if (track) {
        setFormData({
          title: track.title,
          artist: track.artist,
          album: track.album,
        });
      }
    } catch (err) {
      setError('Failed to load track.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (trackId) {
        await updateTrack(trackId, formData);
      } else {
        await createTrack(formData);
      }
      navigate('/');
    } catch (err) {
      setError('Failed to save track.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="track-form" onSubmit={handleSubmit}>
      <h2>{trackId ? 'Edit Track' : 'Add New Track'}</h2>

      {error && <p className="form-error">{error}</p>}

      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="artist"
        placeholder="Artist"
        value={formData.artist}
        onChange={handleChange}
        required
      />
      <input
        name="album"
        placeholder="Album"
        value={formData.album}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Submit'}
      </button>
    </form>
  );
};

export default TrackForm;

