import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartQuery();

  if (isFetching) return <Loader title="loading top artist" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-slate-200 mt-4 mb-10">
        Top Artist
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((track) => (
          <ArtistCard key={track?.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
