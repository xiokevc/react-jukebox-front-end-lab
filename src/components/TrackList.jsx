import { useNavigate } from 'react-router-dom';
import '../styles/TrackList.css';

const TrackList = ({ tracks, onDelete, onPlay }) => {
  const navigate = useNavigate();

  if (tracks.length === 0) {
    return <p>No tracks found.</p>;
  }

  return (
    <div>
      <h2>Track List</h2>
      {tracks.map((track) => (
        <div className="track-card" key={track._id}>
          <h3>{track.title}</h3>
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
          <div className="track-buttons">
            <button onClick={() => navigate(`/edit-track/${track._id}`)}>Edit</button>
            <button onClick={() => onDelete(track._id)}>Delete</button>
            <button onClick={() => onPlay(track)}>Play</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;


