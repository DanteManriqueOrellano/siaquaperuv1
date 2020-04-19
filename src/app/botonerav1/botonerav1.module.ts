import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChkComponent } from './chk/chk/chk.component';
import { OptComponent } from './opt/opt/opt.component';
import { ChksComponent } from './chk/chks/chks.component';
import { OptsComponent } from './opt/opts/opts.component';
import { Botonerav1Directive } from './botonerav1.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BtnuploadComponent } from './btn/btnupload/btnupload.component';
import { BtnsendComponent } from './btn/btnsend/btnsend.component';
import { InputComponent } from './input/input.component';
import { FileComponent } from './btn/btnupload/file/file.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { FilesComponent } from './btn/btnupload/files/files.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [ChkComponent, OptComponent, ChksComponent, OptsComponent, Botonerav1Directive, BtnuploadComponent, BtnsendComponent, InputComponent, FileComponent, ProgressbarComponent, FilesComponent, CardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatFormFieldModule,
  ],
  exports:[ ChksComponent, OptsComponent, Botonerav1Directive, BtnuploadComponent, BtnsendComponent,InputComponent,ProgressbarComponent,FilesComponent,CardComponent]
})
export class Botonerav1Module { }
