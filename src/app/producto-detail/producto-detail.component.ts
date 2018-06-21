import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Producto }         from '../producto';
import { ProductoService }  from '../producto.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: [ './producto-detail.component.css' ]
})
export class ProductoDetailComponent implements OnInit {
  @Input() producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.productoService.updateProducto(this.producto)
      .subscribe(() => this.goBack());
  }
}