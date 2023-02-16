import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AreaOfInterestListItemComponent } from './area-of-interest-list-item/area-of-interest-list-item.component';
import { AreaOfInterestPageComponent } from './area-of-interest-page/area-of-interest-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AreaOfInterestListItemComponent,
    AreaOfInterestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
