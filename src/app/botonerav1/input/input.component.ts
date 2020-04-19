import { Component, OnInit, Input } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';

export interface IInput{
  text:string;
}
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: subformComponentProviders(InputComponent)
})
export class InputComponent extends NgxSubFormComponent<IInput>{
  
  @Input('label') label: string ='etiqueta rdefecto'
  
  protected getFormControls():Controls<IInput>{
    return {
      text: new FormControl()
    }
  }


  
}
