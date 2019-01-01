import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule } from '@angular/flex-layout';

//Utils
import {AppRoutingModule } from './app-routing.module';
import {MaterialModule} from './utils/material.module';
import {NavModule} from './nav/nav.module';

//Feture Module
import {FeatureModule} from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
