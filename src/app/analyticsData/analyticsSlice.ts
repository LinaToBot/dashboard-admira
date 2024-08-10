// libraries.
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// store.
import type { RootState } from "../../app/store";
// interface.
import { AnalyticsState, GeneroTipo } from "./analyticsInterface";
import { analyticsData } from "../../utils/Data/analyticsData";

const initialState: AnalyticsState = analyticsData;
