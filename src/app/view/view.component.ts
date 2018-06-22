import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProducto();
  }

  getProducto(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos.slice());
  }
}
export class NgbdPopoverBasic {
}