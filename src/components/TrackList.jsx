import { useNavigate } from 'react-router-dom';

const TrackList = ({ tracks, onDelete, onPlay }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Track List</h2>
      {tracks.map((track) => (
        <div key={track._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{track.title}</h3>
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
          <button onClick={() => navigate(`/edit-track/${track._id}`)}>Edit</button>
          <button onClick={() => onDelete(track._id)}>Delete</button>
          <button onClick={() => onPlay(track)}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
