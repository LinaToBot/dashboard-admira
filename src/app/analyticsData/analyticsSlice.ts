// libraries.
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// store.
import type { RootState } from "../../app/store";
// interface.
import { AnalyticsState, GeneroTipo } from "./analyticsInterface";
import { analyticsData } from "../../utils/data/analyticsData";

const initialState: AnalyticsState = analyticsData;
