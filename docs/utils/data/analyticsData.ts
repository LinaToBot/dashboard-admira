// interface
import { GeneroTipo } from "../../app/analyticsData/analyticsInterface";

/**
 * Analytics data metrics including page views, user sessions, and demographics ("Google Analytics").
 * @constant
 * @type {Object}
 * @property {Array<{ fecha: string, vistas: number }>} vistasPagina - A list of objects representing the views per page.
 * @property {Array<{ fecha: string, sesiones: number, tasaRebote: number }>} sesiones - A list of objects representing user sessions.
 * @property {Object} demografia - Demographic data including age and gender.
 * @property {Array<{ rango: string, porcentaje: number }>} demografia.edad - A list of objects that represent age demographics.
 * @property {Array<{ tipo: GeneroTipo, porcentaje: number }>} demografia.género - A list of objects representing demographics by gender, using the `GenderType` enum.
 */
export const analyticsData = {
  vistasPagina: [
    { fecha: "2024-08-01", vistas: 300 },
    { fecha: "2024-08-02", vistas: 450 },
  ],
  sesiones: [
    { fecha: "2024-08-01", sesiones: 200, tasaRebote: 0.35 },
    { fecha: "2024-08-02", sesiones: 300, tasaRebote: 0.4 },
  ],
  demografia: {
    edad: [
      { rango: "18-24", porcentaje: 25 },
      { rango: "25-34", porcentaje: 40 },
    ],
    genero: [
      { tipo: GeneroTipo.Hombre, porcentaje: 55 },
      { tipo: GeneroTipo.Mujer, porcentaje: 45 },
    ],
  },
};
