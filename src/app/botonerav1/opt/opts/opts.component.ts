import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { IChkOrOpt } from '../../model/ChkOrOpt.model';
import { FormArray } from '@angular/forms';
export interface IOpts{
  checkboxes:IChkOrOpt[];  
}
@Component({
  selector: 'opts',
  templateUrl: './opts.component.html',
  styleUrls: ['./opts.component.css'],
  providers:subformComponentProviders(OptsComponent)
})
export class OptsComponent extends NgxSubFormComponent<IChkOrOpt[],IOpts> implements OnInit {

  protected getFormControls():Controls<IOpts>{
    return {
      checkboxes: new FormArray([])
    }
  }
  protected transformToFormGroup(checkboxes:IChkOrOpt[]):IOpts {
    return {
      checkboxes : !checkboxes ? [] : checkboxes
    }
  }
  protected transformFromFormGroup(formValue:IOpts):IChkOrOpt[] | null{
    return formValue.checkboxes;
  }
  ngOnInit(): void {
   // console.log(this.formGroupControls.checkboxes.controls)
  }

}
