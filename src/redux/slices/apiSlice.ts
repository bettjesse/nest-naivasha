import { fetchBaseQuery, createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';

const baseQuery: BaseQueryFn<string | { [key: string]: string }, unknown> = fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  
  endpoints: (builder) => ({}),
});
