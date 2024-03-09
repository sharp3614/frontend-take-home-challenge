import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_BASE_URL, prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (q = "all") => `/everything?q=${q}&pageSize=15`,
    }),
  }),
  refetchOnMountOrArgChange: 5,
})

export const { useGetNewsQuery } = newsApi