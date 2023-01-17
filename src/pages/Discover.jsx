import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartQuery();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) {
    return <Loader title="loading song..." />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row">
        <h2 className="font-bold text-3xl text-white">Discover</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 mt-4">
        {data.tracks?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
