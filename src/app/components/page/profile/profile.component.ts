import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export type ProfileType = 'name' | 'email' | 'provinceName' | 'regencyName' | 'districtName';

export type Profile = {
  name: string,
  email: string,
  provinceName: string,
  regencyName: string,
  districtName: string
}

@Component({
  selector: 'app-profile',
  imports: [ 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule 
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  formBuilder = inject(FormBuilder);

  profileFormGroup = this.formBuilder.group<Profile>({
    name: '',
    email: '',
    provinceName: '',
    regencyName: '',
    districtName: ''
  })

  ngOnInit(): void {
    const dataJson = localStorage.getItem('user')!;
    const data = JSON.parse(dataJson) as Profile;
    this.profileFormGroup.controls.name.setValue(data.name);
    this.profileFormGroup.controls.email.setValue(data.email);
    this.profileFormGroup.controls.provinceName.setValue(data.provinceName);
    this.profileFormGroup.controls.regencyName.setValue(data.regencyName);
    this.profileFormGroup.controls.districtName.setValue(data.districtName);
  }

  resetField(field: ProfileType) {
    const dataJson = localStorage.getItem('user')!;
    const data = JSON.parse(dataJson) as Profile;
    this.profileFormGroup.controls[field].setValue(data[field]);
    this.profileFormGroup.controls[field].markAsPristine();
  }

  cancel() {
    const dataJson = localStorage.getItem('user')!;
    const data = JSON.parse(dataJson) as Profile;
    this.profileFormGroup.controls.name.setValue(data.name);
    this.profileFormGroup.controls.email.setValue(data.email);
    this.profileFormGroup.controls.provinceName.setValue(data.provinceName);
    this.profileFormGroup.controls.regencyName.setValue(data.regencyName);
    this.profileFormGroup.controls.districtName.setValue(data.districtName);
    this.profileFormGroup.markAsPristine();
  }

  save() {
    const data = this.profileFormGroup.value;
    localStorage.setItem('user', JSON.stringify(data));
  }

}
