import { Component } from '@angular/core';

import { Articulos } from './Modelos/articulos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';

  arregloarticulos: Articulos[] = [{Codigo: 1, Nombre: "Papa", Precio: 150}];

  objarticulo: Articulos = new Articulos();

  save(){
    if(this.objarticulo.Codigo === 0){
      this.objarticulo.Codigo = this.arregloarticulos.length + 1;
      this.arregloarticulos.push(this.objarticulo);
    }
    this.objarticulo = new Articulos();
  }

  editar(articulox: Articulos){
    this.objarticulo = articulox;
  }

  delete(){
    this.arregloarticulos = this.arregloarticulos.filter(X => X != this.objarticulo)
    this.objarticulo = new Articulos();
  }

  detalle(articulox : Articulos){
    

    this.objarticulo.Codigo = articulox.Codigo;
    this.objarticulo.Nombre = articulox.Nombre;
    this.objarticulo.Precio = articulox.Precio;
  }
}
