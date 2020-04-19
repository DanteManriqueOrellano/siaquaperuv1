import { Component } from '@angular/core';
import { NgxSubFormComponent,Controls,subformComponentProviders } from "ngx-sub-form";
import { IChkOrOpt } from '../../model/ChkOrOpt.model';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-chk',
  templateUrl: './chk.component.html',
  styleUrls: ['./chk.component.css'],
  providers: subformComponentProviders(ChkComponent),
})
export class ChkComponent extends NgxSubFormComponent<IChkOrOpt>  {

  protected getFormControls():Controls<IChkOrOpt>{
    return {
      checked: new FormControl(),
      text: new FormControl(),
    }
  }

}
