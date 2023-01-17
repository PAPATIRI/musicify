import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, TopSongsArtist } from '../components';
import {
  useGetArtistDetailQuery,
  useGetArtistTopSongsQuery,
} from '../redux/services/shazamCore.js';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetail,
    error,
  } = useGetArtistDetailQuery({ artistId });
  const {
    data,
    isFetching: isFetchingArtistTopSongs,
    error: errorSong,
  } = useGetArtistTopSongsQuery({ artistId });

  if (isFetchingArtistDetail || isFetchingArtistTopSongs)
    return <Loader title="loading artist details" />;

  if (error || errorSong) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ i, song, data }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <TopSongsArtist
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default ArtistDetails;
