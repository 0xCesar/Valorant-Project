import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsPageComponent } from './page/agents-page/agents-page.component';
import { TitlePageComponent } from './page/title-page/title-page.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AgentsPageComponent,
    TitlePageComponent,
    PlayerCardComponent,
    SkillCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
