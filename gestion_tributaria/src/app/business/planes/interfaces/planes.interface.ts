export interface PlanesInterface {
    numeroRuc: number;
    razonSocial: string;
    periodo: string;
    baseImponible: number;
    potencialRecaudar: number;
    totalPatrimonioNeto: number;
       
  }

  export interface TipoContribuyenteInterface {
    tipoContribuyenteId: number;
    descripcionContribuyente: string
  }

  export interface TipoProcesoInterface {
    tipoProcesoId: number;
    descripcionProceso: string
  }

  export interface TipoPlanInterface {
    tipoPlanId: number;
    tipoProcesoId: number;
    descripcionPlan: string
  }

  export interface TipoTributoInterface {
    tributoId: number;
    descripcionTributo: string
  }

  export interface ParametroInterface {
    parametroId: number;
    valorNumerico: string
  }
  
  