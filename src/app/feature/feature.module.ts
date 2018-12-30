import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, ServicesComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class FeatureModule { }
