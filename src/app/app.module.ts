import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';

const myRoute=[
  {
    path:"",
    component:ViewPhotoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
