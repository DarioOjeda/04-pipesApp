import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, ColorPrin } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[]): Heroe[] {
    heroes = heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1: -1);
    
    return heroes;
  }

}