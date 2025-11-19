import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../emprendedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {

  emprendedor: Emprendedor | null = null;
  emprendedorDetail: EmprendedorDetail | null = null;

  constructor(private route: ActivatedRoute, private emprendedorService: EmprendedorService, private router: Router) {}

  ngOnInit() {
    console.log("iniciando el detalle")
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.getEmprendedor(id);
      }
    });
  }

  getEmprendedor(id: number): void {
    console.log("Buscando emprendedor")
    this.emprendedorService.getEmprendedorDetail(id).subscribe(nuevoEmpr => {
      console.log(nuevoEmpr)
      this.emprendedor = nuevoEmpr
      this.emprendedorDetail = nuevoEmpr
    })
  }

}
