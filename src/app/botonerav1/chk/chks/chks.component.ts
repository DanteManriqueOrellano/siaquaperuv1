import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls } from 'ngx-sub-form';
import { IChkOrOpt } from '../../model/ChkOrOpt.model';
import {  FormArray } from '@angular/forms';

export interface IChks{
  checkboxes:IChkOrOpt[];  
}
@Component({
  selector: 'chkboxs',
  templateUrl: './chks.component.html',
  styleUrls: ['./chks.component.css'],
  providers: subformComponentProviders(ChksComponent)
})
export class ChksComponent extends NgxSubFormComponent<IChkOrOpt[],IChks> implements OnInit {

  protected getFormControls():Controls<IChks>{
    return {
      checkboxes: new FormArray([])
    }
  }
  protected transformToFormGroup(checkboxes:IChkOrOpt[]):IChks {
    return {
      checkboxes : !checkboxes ? [] : checkboxes
    }
  }
  protected transformFromFormGroup(formValue:IChks):IChkOrOpt[] | null{
    return formValue.checkboxes;
  }
  ngOnInit(): void {
    //console.log(this.formGroupControls.checkboxes.controls)
  }

}
