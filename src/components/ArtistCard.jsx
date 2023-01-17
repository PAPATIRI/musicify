import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-slate-200/5 bg-opacity-89 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg"
        alt="artist"
      />
      <p className="mt-4 font-semibold text-lg text-slate-200 truncate">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
