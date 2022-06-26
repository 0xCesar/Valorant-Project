import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsPageComponent } from './page/agents-page/agents-page.component';
import { TitlePageComponent } from './page/title-page/title-page.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { UltimateCardComponent } from './components/ultimate-card/ultimate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsPageComponent,
    TitlePageComponent,
    PlayerCardComponent,
    UltimateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
