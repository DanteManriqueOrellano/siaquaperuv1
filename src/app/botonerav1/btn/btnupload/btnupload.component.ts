import { Component,  Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'btnupload',
  templateUrl: './btnupload.component.html',
  styleUrls: ['./btnupload.component.css'],
  
  
})
export class BtnuploadComponent   {
  
  
  
  @Output('archivosCargados') archivosCargados:EventEmitter<any> = new EventEmitter<any>();
  @Output('desdebtn') desdebtn:EventEmitter<any> = new EventEmitter<any>();
  
  @Input('nombreBoton') nombreBoton : string ='Explorar Carpeta'
  @Input('icono') icono : string ='fa fa-check'

  
  
  

  onFileSelected($event){
    this.archivosCargados.emit($event)
    /*
    const files = $event.target.files;
    if(files){
      for (let i = 0; i < $event.target.files.length; i++) {
        var filePath = `${Math.random().toString(36).substring(2)}/${this.selectedImage.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        this.addFile()
        this.formGroupControls.files.value[i]['name'] = files[i].name;
        this.formGroupControls.files.value[i]['size'] = files[i].size;
        this.formGroupControls.files.value[i]['type'] = files[i].type;
        this.formGroupControls.files.value[i]['urlWeb'] = filePath;
        const image = {
          name:'',
          type:'',
          size:'',
          url:'',
          urlLocal:'',
        }
        this.allFiles.push(files[i]);
        image.name = files[i].name;
        image.type = files[i].type;
        image.size = files[i].size;
        const reader = new FileReader();
        reader.onload = (e)=>{
          image.url=reader.result+'';
          this.images.push(image)
          this.formGroupControls.files.value[i]['urlLocal'] =image.url
        };
        reader.readAsDataURL(files[i])
        
      }
      
    }
    $event.srcElement.value = null 
    this.detallesArchivo.emit(this.images)*/

  }

}
