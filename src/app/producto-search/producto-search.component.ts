import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-search',
  templateUrl: './producto-search.component.html',
  styleUrls: [ './producto-search.component.css' ]
})
export class ProductoSearchComponent implements OnInit {
  productos$: Observable<Producto[]>;
  private searchTerms = new Subject<string>();

  constructor(private productoService: ProductoService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.productos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.productoService.searchProductos(term)),
    );
  }
}