import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

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
    private _appcomponent: AppComponent,
  ) { }

  get fullName() { return this.form.get('fullName'); }
  get email() { return this.form.get('email'); }
  get address() { return this.form.get('address'); }
  get phone() { return this.form.get('phone'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get zip() { return this.form.get('zip'); }
  // get favLanguage() { return this.form.get('favLanguage'); }
  get gender() { return this.form.get('gender'); }
  get rating() { return this.form.get('rating'); }
  // get selectFile() { return this.form.get('selectFile'); }

  ngOnInit(): void {
    this._appcomponent.setTitle('Reactive Form');
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(7)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      favLanguage: this.fb.array([]),
      gender: ['', [Validators.required]],
      rating: ['', Validators.required],
      selectfile: ['', [Validators.required]],
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
    if (this.form.invalid) { return }
    console.log(this.form.value);
  }

}
