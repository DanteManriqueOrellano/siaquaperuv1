import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btnsend',
  templateUrl: './btnsend.component.html',
  styleUrls: ['./btnsend.component.css']
})
export class BtnsendComponent implements OnInit {
  @Input('nombreBoton') nombreBoton:string = 'Enviar';
  @Input('icono') icono:string = 'fa fa-check'
  constructor() { }

  ngOnInit(): void {
  }

}
