import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AreaOfInterestListItemComponent } from './main/area-of-interest-list-item/area-of-interest-list-item.component';
import { AreaOfInterestPageComponent } from './main/area-of-interest-page/area-of-interest-page.component';
import { BackgroundElementComponent } from './main/background-element/background-element.component';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from './main/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AreaOfInterestListItemComponent,
    AreaOfInterestPageComponent,
    BackgroundElementComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
