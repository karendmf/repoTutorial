import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Producto } from './producto';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ProductoService {

  private productosUrl = 'api/productos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getProductos (): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl)
      .pipe(
        tap(productos => this.log(`fetched productos`)),
        catchError(this.handleError('getProductos', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/?id=${id}`;
    return this.http.get<Producto[]>(url)
      .pipe(
        map(productos => productos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} producto id=${id}`);
        }),
        catchError(this.handleError<Producto>(`getProducto id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getProducto(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      tap(_ => this.log(`fetched producto id=${id}`)),
      catchError(this.handleError<Producto>(`getProducto id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchProductos(term: string): Observable<Producto[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Producto[]>(`${this.productosUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found productos matching "${term}"`)),
      catchError(this.handleError<Producto[]>('searchProductos', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addProducto (producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, producto, httpOptions).pipe(
      tap((producto: Producto) => this.log(`added producto w/ id=${producto.id}`)),
      catchError(this.handleError<Producto>('addProducto'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteProducto (producto: Producto | number): Observable<Producto> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url = `${this.productosUrl}/${id}`;

    return this.http.delete<Producto>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted producto id=${id}`)),
      catchError(this.handleError<Producto>('deleteProducto'))
    );
  }

  /** PUT: update the hero on the server */
  updateProducto (producto: Producto): Observable<any> {
    return this.http.put(this.productosUrl, producto, httpOptions).pipe(
      tap(_ => this.log(`updated producto id=${producto.id}`)),
      catchError(this.handleError<any>('updateProducto'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ProductoService: ' + message);
  }
}