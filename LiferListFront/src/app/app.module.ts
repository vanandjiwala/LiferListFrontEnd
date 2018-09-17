import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MySpeciesComponent } from './my-species/my-species.component';
import { SpeciesComponent } from './species/species.component';
import { CategoriesComponent } from './categories/categories.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MySpeciesComponent,
    SpeciesComponent,
    CategoriesComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:LandingPageComponent},
      {path:'mySpecies', component:MySpeciesComponent},
      {path:'species', component:SpeciesComponent},
      {path:'categories', component:CategoriesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
