const NowPlaying = ({ track }) => {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '2px solid #333' }}>
      <h2>Now Playing</h2>
      <h3>{track.title}</h3>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
    </div>
  );
};

export default NowPlaying;