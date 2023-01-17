import SongBar from './SongBar';

const TopSongsArtist = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-slate-200 mb-4">Top Songs</h1>
      {data?.data?.map((song, i) => (
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

export default TopSongsArtist;
