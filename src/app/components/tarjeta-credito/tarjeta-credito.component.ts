import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any = [
    {
      titular: 'Juan Perez',
      numeroTarjeta: '54212545461',
      fechaExpiracion: '11/12',
      cvv: '123',
    },
    {
      titular: 'Luisa Armstrong',
      numeroTarjeta: '54432424461',
      fechaExpiracion: '12/12',
      cvv: '178',
    },
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: ['',Validators.required],
      numeroTarjeta: ['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
      cvv: ['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  agregarTarjeta() {
    var tarjeta = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.listTarjetas.push(tarjeta);
    this.listTarjetas=this.listTarjetas;
  }
}
