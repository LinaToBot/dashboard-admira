export interface VistasPagina {
  fecha: string;
  vistas: number;
}

export interface Sesiones {
  fecha: string;
  sesiones: number;
  tasaRebote: number;
}

export interface EdadDemografia {
  rango: string;
  porcentaje: number;
}

export enum GeneroTipo {
  Hombre = "hombre",
  Mujer = "mujer",
}

export interface GeneroDemografia {
  tipo: GeneroTipo;
  porcentaje: number;
}

/**
 * Analytics metrics global state,
 * Google Analytics simulated data,
 * From analyticsData.json
 * @interface
 */
export interface AnalyticsState {
  vistasPagina: VistasPagina[];
  sesiones: Sesiones[];

  demografia: {
    edad: EdadDemografia[];
    género: GeneroDemografia[];
  };
}
