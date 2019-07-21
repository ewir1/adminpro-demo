import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService } from 'src/app/services/service.index';
import { Location } from '@angular/common';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];
  desde = 0;
  totalMedicos = 0;

  constructor(
    public _medicoService: MedicoService,
    public location: Location) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this._medicoService.cargarMedicos()
        .subscribe((medicos: any) => {
          this.medicos = medicos.medicos;
          this.totalMedicos = medicos.total;
        });
  }

  buscarMedico(termino: string) {

    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    this._medicoService.buscarMedicos(termino)
        .subscribe(medicos => this.medicos = medicos);
  }

  borrarMedico(medico: Medico) {
    this._medicoService.borrarMedico(medico._id)
        .subscribe(() => this.cargarMedicos());
  }

  volver() {
    this.location.back();
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;
    if (desde >= this.totalMedicos) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarMedicos();
  }

}
