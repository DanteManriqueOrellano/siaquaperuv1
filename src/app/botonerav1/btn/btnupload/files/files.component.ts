import { Component, OnInit } from '@angular/core';
import { NgxSubFormComponent, subformComponentProviders, Controls, ArrayPropertyKey, ArrayPropertyValue } from 'ngx-sub-form';
import { IFile } from '../file/file.component';
import { FormArray, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
export interface IFiles{
  files:IFile[]
}
@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  providers: subformComponentProviders(FilesComponent)
})
export class FilesComponent extends NgxSubFormComponent<IFile[],IFiles>  implements OnInit {

  nombreBoton:string='Explorar Carpeta';
  icono:string='fa fa-check'
  allFiles:any = [];
  images:any = [];
  nombreBotonEliminar:string = "eliminar"

  protected getFormControls():Controls<IFiles>{
    return{
      files: new FormArray([])
      
    }
  }
  protected transformToFormGroup(obj: IFile[]):IFiles | null {
    return{
      files: !obj ? [] : obj
    }
  }
  protected transformFromFormGroup(formValue: IFiles):IFile[]{
    return formValue.files
  }
  public createFormArrayControl(
    key:ArrayPropertyKey<IFiles> | undefined,
    value:ArrayPropertyValue<IFiles>
  ):FormControl{
    switch(key){
      case 'files':
        return new FormControl(value)
    }
  }
  public addFile(){
    this.formGroupControls.files.push(this.createFormArrayControl('files',{name:'',size:'',type:'',urlWeb:'',urlLocal:'',descripcion:'',unadescripcion:{text:''}}))
  }
  archivosCargados($event){
    const files = $event.target.files;
    if(files){
      for (let i = 0; i < $event.target.files.length; i++) {
        
        var filePath = `${Math.random().toString(36).substring(2)}/${this.nombreBoton.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        readFileAsDataURL($event.target.files[i]).subscribe((val)=>{
          this.addFile()                
          this.formGroupControls.files.value[i]['size'] = files[i].size;
          this.formGroupControls.files.value[i]['type'] = files[i].type;
          this.formGroupControls.files.value[i]['urlWeb'] = filePath;
          this.formGroupControls.files.value[i]['urlLocal']= val;
          this.formGroupControls.files.value[i]['descripcion']='alguna descripcion';
          this.formGroupControls.files.value[i]['name'] = files[i].name ;    
          

       })
        
      }
      
    }
    

  }

  ngOnInit(): void {
  }
  eliminar(index: number){
    this.formGroupControls.files.removeAt(index);

  }

}


export function readFileAsDataURL(file: Blob): Observable<string>
{
	return Observable.create((observable) => {
		const fileReader = new FileReader;

		fileReader.onload = (() => {
			observable.next(fileReader.result);
			observable.complete();
		});

		fileReader.readAsDataURL(file);
	});
}


export function readFileAsBase64(file: Blob): Observable<string>
{
	return readFileAsDataURL(file).pipe(
		map(stripBase64Prefix),
	);
}


export function readFileInChunksAsDataURL(file: Blob, chunkSize: number = 64 * 1024, contentType?: string): Observable<string>
{
	const fileSize = file.size;

	return Observable.create((observable) => {

		function readChunk(offset: number): void
		{
			const end = offset + chunkSize;
			const fileReader = new FileReader;
			const chunk = file.slice(offset, end, contentType);

			fileReader.onload = (() => {
				observable.next(fileReader.result);

				if (end >= fileSize) {
					observable.complete();
				} else {
					readChunk(end);
				}
			});

			fileReader.readAsDataURL(chunk);
		}

		readChunk(0);
	});
}


export function readFileInChunksAsBase64(file: Blob, chunkSize: number = 64 * 1024, contentType?: string): Observable<string>
{
	return readFileInChunksAsDataURL(file, chunkSize, contentType).pipe(
		map(stripBase64Prefix),
	);
}


function stripBase64Prefix(data: string): string
{
	return data.substr(data.indexOf(';base64,') + 8);
}
