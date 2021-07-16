export enum ColorPrin {
    rojo, negro, azul, verde, amarillo, rosa, plateado, naranja, transparente
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: ColorPrin;
}