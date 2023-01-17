import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';
import Skeleton from './Skeleton';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-slate-300 mr-3">{i + 1}.</h3>
    <div className="flex flex-row flex-1 items-center justify-between">
      <img
        src={song?.images.coverart}
        alt={song?.title}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song?.key}`}>
          <p className="text-xl font-bold text-slate-200">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base font-medium text-slate-400 mt-1">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePlay={handlePlayClick}
      handlePause={handlePauseClick}
      song={song}
    />
  </div>
);
const TopPlay = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data } = useGetTopChartQuery();
  const divRef = useRef(null);

  const topPlays = data?.tracks.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  useEffect(() => {
    divRef.current.scrollIntoView({ behaviour: 'smooth' });
  });

  return (
    <div
      className="flex flex-col xl:ml-6 ml-0 xl:mb-6 mb-0 flex-1 xl:max-w-[500px] max-w-full"
      ref={divRef}
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        <div className="flex-flex-col gap-1 mt-4">
          {topPlays ? (
            topPlays?.map((song, i) => (
              <TopChartCard
                song={song}
                i={i}
                key={song.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePlayClick={() => handlePlayClick(song, i)}
                handlePausePause={handlePauseClick}
              />
            ))
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artist</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays ? (
            topPlays?.map((song, i) => (
              <SwiperSlide
                key={song.key || i}
                style={{ width: '25%', height: 'auto' }}
                className="shadow-lg rounded-full animate-slideright"
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img
                    src={song?.images.background}
                    alt="name"
                    className="rounded-full w-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <Skeleton rounded />
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
