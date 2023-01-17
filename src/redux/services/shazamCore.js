import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '41bec9b9a9msh70b8062c068c111p124cedjsn31decb230e7d'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChart: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`,
    }),
    getArtistDetail: builder.query({
      query: ({ artistId }) => `/artists/get-summary?id=${artistId}`,
    }),
    getArtistTopSongs: builder.query({
      query: ({ artistId }) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: () => `/charts/list`,
    }),
    getSongBySearch: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}&offset=0&limit=5`,
    }),
  }),
});

export const {
  useGetTopChartQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailQuery,
  useGetArtistTopSongsQuery,
  useGetSongsByCountryQuery,
  useGetSongBySearchQuery,
} = shazamApi;
