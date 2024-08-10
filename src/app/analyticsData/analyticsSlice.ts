// libraries.
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// store.
import type { RootState } from "../../app/store";
// interface.
import {
  AnalyticsState,
  EdadDemografia,
  GeneroDemografia,
  Sesiones,
  VistasPagina,
} from "./analyticsInterface";
import { analyticsData } from "../../utils/data/analyticsData";

/**
 * The initial state for the analytics slice, loaded from `analyticsData`.
 * @type {AnalyticsState}
 */
const initialState: AnalyticsState = analyticsData;

/**
 * The Redux slice that handles the Analytics state.
 * @constant
 * @type {Slice<AnalyticsState, {
 *   updateVistasPagina: (state: AnalyticsState, action: PayloadAction<VistasPagina[]>) => void;
 *   updateSesiones: (state: AnalyticsState, action: PayloadAction<Sesiones[]>) => void;
 *   updateDemografiaEdad: (state: AnalyticsState, action: PayloadAction<EdadDemografia[]>) => void;
 *   updateDemografiaGenero: (state: AnalyticsState, action: PayloadAction<GeneroDemografia[]>) => void;
 * }, "analytics">}
 */
const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    /**
     * Updates the list of VistasPagina in the state.
     * @param {AnalyticsState} state - The current state of analytics.
     * @param {PayloadAction<VistasPagina[]>} action - The action that contains the new VistasPagina data.
     */
    updateVistasPagina(state, action: PayloadAction<VistasPagina[]>) {
      state.vistasPagina = action.payload;
    },
    /**
     * Updates the list of Sesiones in the state.
     * @param {AnalyticsState} state -  The current state of analytics.
     * @param {PayloadAction<Sesiones[]>} action - The action that contains the new Sesiones data.
     */
    updateSesiones(state, action: PayloadAction<Sesiones[]>) {
      state.sesiones = action.payload;
    },
    /**
     * Updates the list of EdadDemografia in the state.
     * @param {AnalyticsState} state -  The current state of analytics.
     * @param {PayloadAction<EdadDemografia[]>} action - The action that contains the new EdadDemografia data.
     */
    updateDemografiaEdad(state, action: PayloadAction<EdadDemografia[]>) {
      state.demografia.edad = action.payload;
    },
    /**
     * Updates the list of GeneroDemografia in the state.
     * @param {AnalyticsState} state - The current state of analytics.
     * @param {PayloadAction<GeneroDemografia[]>} action - The action that contains the new GeneroDemografia data.
     */
    updateDemografiaGenero(state, action: PayloadAction<GeneroDemografia[]>) {
      state.demografia.género = action.payload;
    },
  },
});

/**
 * Actions exported from the slice to update the state.
 * @typedef {Object} Actions
 * @property {(payload: VistasPagina[]) => void} updateVistasPagina - Action to update the list of VistasPagina.
 * @property {(payload: Sesiones[]) => void} updateSesiones - Action to update the list of Sesiones.
 * @property {(payload: EdadDemografia[]) => void} updateDemografiaEdad -  Action to update the EdadDemografia.
 * @property {(payload: GeneroDemografia[]) => void} updateDemografiaGenero - Action to update the GeneroDemografia.
 */
export const {
  updateVistasPagina,
  updateSesiones,
  updateDemografiaEdad,
  updateDemografiaGenero,
} = analyticsSlice.actions;

/**
 * Selector to get the analytics state from the store.
 * @param {RootState} state - The Global state of the application.
 * @returns {AnalyticsState} The current state of analytics.
 */
export const selectViews = (state: RootState) => state.analytics.vistasPagina;
export const selectSessions = (state: RootState) => state.analytics.sesiones;
export const selectDemography = (state: RootState) =>
  state.analytics.demografia;

// export const selectCount = (state: RootState) => state.counter.value;

/**
 * The reducer for the analytics slice, exported to be used in the store configuration.
 * @type {Reducer<AnalyticsState>}
 */
export default analyticsSlice.reducer;
