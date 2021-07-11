import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower: string = 'darío';
  nombreUpper: string = 'DARÍO';
  nombreCompleto: string = 'Darío';

}
