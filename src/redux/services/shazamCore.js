import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '8440d9beadmsh4857ddf843dd410p1f5ba6jsn9f6672db70fc'
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
  useGetSongBySearchQuery,
} = shazamApi;
