import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/service.index';
import { Hospital } from 'src/app/models/hospital.model';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
import { Location } from '@angular/common';
// import swal from 'sweetalert';

declare var swal: any;


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];
  desde = 0;
  totalHospitales = 0;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService,
    public location: Location) { }

  ngOnInit() {
   this.cargarHospitales();
   this._modalUploadService.notificacion.subscribe(() => this.cargarHospitales());
  }

  buscarHospital(termino: string) {

    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this._hospitalService.buscarHospital(termino)
        .subscribe(hospitales => this.hospitales = hospitales);
  }

  cargarHospitales() {
    this._hospitalService.cargarHospitales(this.desde)
        .subscribe((hospitales: any) => {
          this.hospitales = hospitales.hospitales;
          this.totalHospitales = hospitales.total;
        });
  }

  guardarHospital(hospital: Hospital) {
    this._hospitalService.actualizarHospital(hospital).subscribe();
  }

  borrarHospital(hospital: Hospital) {
    this._hospitalService.borrarHospital(hospital._id)
        .subscribe(() => this.cargarHospitales());
  }

  crearHospital() {
    swal({
      title: 'Crear hospital',
      text: 'Ingrese el nombre del hospital',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then((valor: string) => {
      if (!valor || valor.length === 0 ) {
        return;
      }

      this._hospitalService.crearHospital(valor)
          .subscribe(() => this.cargarHospitales());
    });
  }

  actualizarImagen(hospital: Hospital) {
    this._modalUploadService.mostrarModal('hospitales', hospital._id);
  }

  volver() {
    this.location.back();
  }

  cambiarDesde(valor: number) {
    const desde = this.desde + valor;
    if (desde >= this.totalHospitales) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarHospitales();
  }
}
