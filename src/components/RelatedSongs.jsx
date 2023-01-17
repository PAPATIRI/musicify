import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  const dataRelatedSongs = data.resources['shazam-songs'];

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-slate-200">Related Songs</h1>
      {Object.values(dataRelatedSongs)?.map((song, i) => (
        <SongBar
          key={song.id}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>
  );
};

export default RelatedSongs;
