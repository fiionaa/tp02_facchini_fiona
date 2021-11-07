import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireResultComponent } from './formulaire-result/formulaire-result.component';
import {phoneNumberPipe} from './app.phonenumber.pipe';
import { CatalogueComponent } from './catalogue/catalogue.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogueFilterPipe } from './catalogue-filter.pipe';
import { NgxsModule } from '@ngxs/store';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireComponent,
    FormulaireResultComponent,
    phoneNumberPipe,
    CatalogueComponent,
    CatalogueFilterPipe,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
