export interface PlanesInterface {
    // id: number;
    // razonSocial: string;
    // ruc: string;
    // direccion: string;
    // telefono: string;
    // correo: string;
    // estado: string

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
    descripcionPlan: string
  }

  export interface TipoTributoInterface {
    tributoId: number;
    descripcionTributo: string
       
  }
  
  