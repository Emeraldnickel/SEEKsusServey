import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, NameEditorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}