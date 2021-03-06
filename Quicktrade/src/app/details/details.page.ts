import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  productos: IProducto | IInmobiliaria | IMotor | ITecnologia = {
    nombre : "",
    descripcion : "",
    precio : 0,
    categoria: 0,
    metrosCuadrados: 0,
    numBanyos : 0,
    numHabitaciones : 0,
    localidad : "",
    vehiculo : 0,
    kilometros : 0,
    anyos : 0,
    estado: 0,
    uid : 1,
  };
  id: string;

  constructor(private _ProductoService: ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Recibe un id
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    let ref = this._ProductoService.getProducto(this.id);
    ref.once("value", snapshot => {
      let value =snapshot.val();
      console.log(value);

      this.productos = value;

    });
    //this.productos = this._ProductoService.getProducto(this.id);
    //console.log(this.productos.id);

  }

}
