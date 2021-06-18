import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  states: any = ['State 1', 'State 2', 'State 3', 'State 4', 'State 5', 'State 6', 'State 7'];
  languageLists: any = [
    { id: 1, name: "Python" },
    { id: 2, name: "Java" },
    { id: 3, name: "C" },
    { id: 4, name: "C#" },
  ]

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      fullName: '',
      email: '',
      address: '',
      phone: '',
      city: '',
      state: '',
      zip: '',
      favLanguage: this.fb.array([]),
      gender: '',
      rating: '',
      selectfile: '',
    })
  }

  onCheckboxChange(e) {
    const favLanguage: FormArray = this.form.get('favLanguage') as FormArray;
    if (e.target.checked) {
      favLanguage.push(new FormControl(e.target.value));
    } else {
      const index = favLanguage.controls.findIndex(x => x.value === e.target.value);
      favLanguage.removeAt(index);
    }
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
