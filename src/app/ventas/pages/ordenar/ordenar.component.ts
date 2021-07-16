import { Component } from '@angular/core';
import { noop } from 'rxjs';
import { ColorPrin, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  enMayusculas: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: ColorPrin.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: ColorPrin.negro
    },
    {
      nombre: 'Deadpool',
      vuela: false,
      color: ColorPrin.rojo
    },
    {
      nombre: 'Silver Surfer',
      vuela: true,
      color: ColorPrin.plateado
    }
  ];

  cambiarMayus(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }

}
