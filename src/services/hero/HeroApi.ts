import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Hero } from "@typings/Hero";

export const heroApi = createApi({
  reducerPath: "heroApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getHeroesList: builder.query<Hero[], string>({
      query: (query: string) => `/hero${query}`,
    }),
    getHero: builder.query<Hero, string>({
      query: (id: string) => `/hero/${id}`,
    }),
  }),
});

export const { useGetHeroesListQuery, useGetHeroQuery } = heroApi;
