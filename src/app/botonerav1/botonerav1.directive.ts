import {  Directive, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { IChkOrOpt } from './model/ChkOrOpt.model';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[botonera]'
})
export class Botonerav1Directive implements OnInit {
  /**parametros de las opciones y checkboxes */
  @Input('items') items:any[]=[]
  @Output('transform') transform: EventEmitter<any> = new EventEmitter()
  /**fin */
  /*parametros de los botones*/
  /**fin */
  constructor(@Inject(DOCUMENT) private _document) { }
  
  ngOnInit():void {
    //this._document.body.classList.add('bodybg-color');
     // OR you can Add inline style css with the help of code below
    // this._document.body.style.background = '#fff';
    this._document.body.style.background='#ebecf0' //'#ebecf0'
    
    const objsToCheckboxesOrRadioButtonsFormat = (objs: ReadonlyArray<any>): ReadonlyArray<any> =>
      !objs ?
        [] :
        objs.map((obj:IChkOrOpt) => ({
          checked: false,
          text: obj.text
        }))
    this.transform.emit(objsToCheckboxesOrRadioButtonsFormat(this.items))

  }
  ngOnDestroy(): void {
    // remove the class form body tag
    this._document.body.classList.add('bodybg-color');
  }
}
