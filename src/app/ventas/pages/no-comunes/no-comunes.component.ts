import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  
  //i18nSelect
  nombre: string = 'Darío';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clientes: string[] = ['María', 'Fer', 'Clara', 'Toni', 'Paco'];
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos dos clientes esperando.',
    'other' : 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    if(this.nombre === 'Darío'){
      this.nombre = 'María';
      this.genero = 'femenino';
    }else{
      this.nombre = 'Darío';
      this.genero = 'masculino';
    }
  }

  borrarCliente() {
    if(this.clientes.length > 0){
      this.clientes.pop();
    }
  }
 

}
