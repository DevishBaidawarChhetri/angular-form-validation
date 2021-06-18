import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(
    private _appComponent: AppComponent,
  ) { }

  ngOnInit(): void {
    this._appComponent.setTitle('Template Driven Form');
  }

}
