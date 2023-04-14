import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hero } from "@typings/Hero";
import { FilterOption } from "@typings/Option";
import { FILTER_OPTION } from "@constants/Constants";

interface HeroState {
  singleParty: Hero[];
  tripleParty: {
    first: Hero[];
    second: Hero[];
    third: Hero[];
  };
  filterOption: FilterOption;
}

// Define the initial state using that type
const initialState: HeroState = {
  singleParty: [],
  tripleParty: {
    first: [],
    second: [],
    third: [],
  },
  filterOption: FILTER_OPTION,
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setSingleParty: (state, action: PayloadAction<Hero[]>) => {
      state.singleParty = action.payload;
    },
    resetSingleParty: (state) => {
      state.singleParty = initialState.singleParty;
    },
    setTripleFirstParty: (state, action: PayloadAction<Hero[]>) => {
      state.tripleParty.first = action.payload;
    },
    resetTripleFirstParty: (state) => {
      state.tripleParty.first = initialState.tripleParty.first;
    },
    setTripleSecondParty: (state, action: PayloadAction<Hero[]>) => {
      state.tripleParty.second = action.payload;
    },
    resetTripleSecondParty: (state) => {
      state.tripleParty.second = initialState.tripleParty.second;
    },
    setTripleThirdParty: (state, action: PayloadAction<Hero[]>) => {
      state.tripleParty.third = action.payload;
    },
    resetTripleThirdParty: (state) => {
      state.tripleParty.third = initialState.tripleParty.third;
    },
    resetTripleParty: (state) => {
      state.tripleParty = initialState.tripleParty;
    },
    setFilterOption: (state, action: PayloadAction<FilterOption>) => {
      state.filterOption = action.payload;
    },
    resetFilterOption: (state) => {
      state.filterOption = initialState.filterOption;
    },
  },
});

export const {
  setSingleParty,
  resetSingleParty,
  setTripleFirstParty,
  resetTripleFirstParty,
  setTripleSecondParty,
  resetTripleSecondParty,
  setTripleThirdParty,
  resetTripleThirdParty,
  resetTripleParty,
  setFilterOption,
  resetFilterOption,
} = heroSlice.actions;

export default heroSlice;
