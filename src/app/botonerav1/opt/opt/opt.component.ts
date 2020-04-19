import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from "ngx-sub-form";
import { IChkOrOpt } from '../../model/ChkOrOpt.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-opt',
  templateUrl: './opt.component.html',
  styleUrls: ['./opt.component.css'],
  providers: subformComponentProviders(OptComponent),
})
export class OptComponent extends NgxSubFormComponent<IChkOrOpt>implements OnInit  {
  

 
 
  protected getFormControls():Controls<IChkOrOpt>{
    return {
      checked: new FormControl(true),
      text: new FormControl(),
    }
  }
  ngOnInit(): void {
   // console.log(this.formControlNames.checked)
  }
 
  

}
