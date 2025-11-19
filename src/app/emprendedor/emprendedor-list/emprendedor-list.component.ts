import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  // Lista de emprendedores quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Array<Emprendedor> = []

  @Output() emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;

  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.router.navigate(['/emprendedores', emprendedor.id])
  }


  constructor(private emprendedorService: EmprendedorService, private router: Router) { }
  ngOnInit(): void {
    this.getEmprendedoresList();
  }

  getEmprendedoresList(): Array<Emprendedor> {
    console.log("Intentando acceder")
    this.emprendedorService.getEmprendedores().subscribe((data) => {
      this.emprendedores = data;
    });
    return this.emprendedores;
  }

  getTotalEmprendedores(): number {
    return this.emprendedores.length;
  }
}
