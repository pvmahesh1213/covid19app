import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Input() url: any;
  @Output() getuploadimages: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('formControlName', this.url)
  }

  detectFiles(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.url = event.target.result;
          this.getuploadimages.emit(this.url);
          //console.log('this.urls', this.singleImage);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
