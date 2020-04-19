import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input('porcentaje') porcentaje: number=10;
  @Input('descripcion') descripcion: string = 'iOS 7 Progress Bar';
  
  constructor() { }

  ngOnInit(): void {
  }

}
