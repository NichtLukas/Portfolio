import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardTemplateComponent } from './lib/components/card-template/card-template.component';
import { MaterialModule } from './material.module';
import { CardViewComponent } from './lib/components/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTemplateComponent,
    CardViewComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
