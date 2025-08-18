import '../styles/NowPlaying.css';

const NowPlaying = ({ track }) => {
  return (
    <div className="now-playing">
      <h2>Now Playing</h2>
      <h3>{track.title}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
    </div>
  );
};

export default NowPlaying;
