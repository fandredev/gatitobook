import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimalsService } from './../animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css']
})
export class NewAnimalComponent implements OnInit {
  formAnimal!: FormGroup
  file!: File
  previewPhoto!: string
  percentCompleteUploadPhoto = 0

  constructor(private readonly _animalsService: AnimalsService, private readonly _formBuilder: FormBuilder, private readonly _router: Router) { }

  ngOnInit(): void {
    this.formAnimal = this._formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  uploadPhoto() {
    const fields = {
      allowComments: this.formAnimal.get('allowComments')?.value ?? false,
      description: this.formAnimal.get('description')?.value ?? ''
    }
    this._animalsService.upload(fields.description, fields.allowComments, this.file).pipe(
      finalize(() =>
        this._router.navigate(['animals'])
      )).subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total ?? 1
          this.percentCompleteUploadPhoto = Math.round(100 * (event.loaded / total))
        }
      }, error => console.log(error))
  }

  takeFile(file_name: any) {
    const [file] = file_name?.files
    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => (this.previewPhoto = event.target.result)
    reader.readAsDataURL(file)
  }
}
