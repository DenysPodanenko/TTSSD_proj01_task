import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BigDataComponent } from './features/big-data/big-data.component';
import { DynmicContentComponent } from './features/dynmic-content/dynmic-content.component';
import { NeuromarketingComponent } from './features/neuromarketing/neuromarketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigDataComponent,
    DynmicContentComponent,
    NeuromarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
