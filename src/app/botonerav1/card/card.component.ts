import { Component, OnInit, Input } from '@angular/core';
import { IFiles } from '../btn/btnupload/files/files.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('urlLocal') urlLocal:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
