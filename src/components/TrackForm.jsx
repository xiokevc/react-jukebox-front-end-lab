import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTrack, getTracks, updateTrack } from '../services/trackService';
import '../styles/TrackForm.css';

const TrackForm = () => {
  const [formData, setFormData] = useState({ title: '', artist: '', album: '' });
  const { trackId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (trackId) {
      fetchTrack();
    }
  }, [trackId]);

  const fetchTrack = async () => {
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
      console.error('Failed to fetch track:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (trackId) {
        await updateTrack(trackId, formData);
      } else {
        await createTrack(formData);
      }
      navigate('/');
    } catch (err) {
      console.error('Failed to save track:', err);
    }
  };

  return (
    <form className="track-form" onSubmit={handleSubmit}>
      <h2>{trackId ? 'Edit Track' : 'Add New Track'}</h2>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrackForm;
