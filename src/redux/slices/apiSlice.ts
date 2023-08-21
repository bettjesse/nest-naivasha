import { fetchBaseQuery, createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';

const baseQuery: BaseQueryFn<string | { [key: string]: string }, unknown> = fetchBaseQuery({ baseUrl: "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  
  endpoints: (builder) => ({}),
});
