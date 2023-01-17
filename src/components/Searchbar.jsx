import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchQuery}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="mt-4 p-4 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        search songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 mx-4" />
        <input
          type="search"
          autoComplete="off"
          name="search-field"
          id="search-field"
          placeholder="search songs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-slate-200"
        />
      </div>
    </form>
  );
};

export default Searchbar;
