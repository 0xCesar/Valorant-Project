import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentPageComponent } from './page/agent-page/agent-page.component';
import { AgentsPageComponent } from './page/agents-page/agents-page.component';

const routes: Routes = [
{
  path: "agents",
  component: AgentsPageComponent
},
{
  path: "agents/agent",
  component: AgentPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
