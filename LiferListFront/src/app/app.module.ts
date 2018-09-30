import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MySpeciesComponent } from './my-species/my-species.component';
import { SpeciesComponent } from './species/species.component';
import { CategoriesComponent } from './categories/categories.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewLiferFormComponent } from './new-lifer-form/new-lifer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MySpeciesComponent,
    SpeciesComponent,
    CategoriesComponent,
    LandingPageComponent,
    NewLiferFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:LandingPageComponent},
      {path:'mySpecies', component:MySpeciesComponent},
      {path:'species', component:SpeciesComponent},
      {path:'categories', component:CategoriesComponent},
      {path:'newLifer', component:NewLiferFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
