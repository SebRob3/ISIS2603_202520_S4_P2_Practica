import { Injectable } from '@angular/core';
import { Emprendedor } from './emprendedor';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { EmprendedorDetail } from './emprendedor-detail';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {

  private url = "https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/";

  constructor(private http: HttpClient) { }

  getEmprendedores(): Observable<Emprendedor[]> {
    console.log("inciando el get")
    return this.http.get<any[]>(this.url + "emprendedores.json").pipe(
      map(arr => arr.map(item => new Emprendedor(
        item.id,
        item.nombre,
        item.genero,
        item.pregrado,
        item.foto_url
      )))
    ) as Observable<Emprendedor[]>;
  }

  getEmprendedor(id: number): Observable<Emprendedor> {
    return this.http.get<any>(this.url + id.toString() + "/emprendedor.json").pipe(
      map(item => new Emprendedor(
        item.id,
        item.nombre,
        item.genero,
        item.pregrado,
        item.foto_url
      ))
    );
  }

  getEmprendedorDetail(id: number): Observable<EmprendedorDetail> {
    return this.http.get<any>(this.url + id.toString() + "/emprendedor.json").pipe(
      map(item => new EmprendedorDetail(
        item.id,
        item.nombre,
        item.genero,
        item.pregrado,
        item.foto_url,
        item.emprendimientos
      ))
    );
  }
}
