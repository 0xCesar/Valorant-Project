import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsPageComponent } from './page/agents-page/agents-page.component';
import { TitlePageComponent } from './page/title-page/title-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsPageComponent,
    TitlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
