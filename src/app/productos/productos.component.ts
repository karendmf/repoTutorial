import { Component, OnInit } from '@angular/core';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getProductos()
    .subscribe(productos => this.productos = productos);
  }

  add(name: string, img: string): void {
    name = name.trim();
    img = "../../assets/img/size.jpg";
    if (!name) { return; }
    this.productoService.addProducto({ name, img } as Producto)
      .subscribe(producto => {
        this.productos.push(producto);
      });
  }

  delete(producto: Producto): void {
    this.productos = this.productos.filter(h => h !== producto);
    this.productoService.deleteProducto(producto).subscribe();
  }

}