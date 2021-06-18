import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  states: any = ['State 1', 'State 2', 'State 3', 'State 4', 'State 5', 'State 6', 'State 7'];
  languageLists: any = [
    { id: 1, name: "Python" },
    { id: 2, name: "Java" },
    { id: 3, name: "C" },
    { id: 4, name: "C#" },
  ]
  userModel = new User("", "", "", 9876543210, "", "", 12345, [], "", 5, "");
  submitted: boolean = false;
  stateHasError: boolean = true;

  constructor(
    private _appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    this._appComponent.setTitle('Template Driven Form');
  }

  validateState(value) {
    value === ''
      ? this.stateHasError = true
      : this.stateHasError = false
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.userModel);
    alert(JSON.stringify(this.userModel));
  }

}
