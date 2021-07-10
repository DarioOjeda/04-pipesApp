import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "DaRíO";
  valor: number = 1000;
  obj = {
    nombre: "Darío"
  }

  mostrarNombre() {
    console.log(this.nombre);
  }
}
