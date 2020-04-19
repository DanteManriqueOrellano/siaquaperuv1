import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { FormControl } from '@angular/forms';
import { IInput } from 'src/app/botonerav1/input/input.component';

export interface IFile {
  name:string,
  type:string,
  size:string,
  urlWeb:string;
  urlLocal:string;
  descripcion:string;
  unadescripcion:IInput

}
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  providers: subformComponentProviders(FileComponent)
})
export class FileComponent extends NgxSubFormComponent<IFile> implements OnInit {
  descripcion ='Descripción'
  protected getFormControls():Controls<IFile>{
    return {
      name: new FormControl(),
      size: new FormControl(),
      type: new FormControl(),
      urlWeb: new FormControl(),
      urlLocal: new FormControl(),
      descripcion: new FormControl(),
      unadescripcion: new FormControl()
    }
  }

  ngOnInit(): void {
  }

}
