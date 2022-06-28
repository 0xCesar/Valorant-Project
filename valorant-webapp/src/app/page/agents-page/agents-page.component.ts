import { Component, Input, OnInit } from '@angular/core';
import agents from "./agents.json";


@Component({
  selector: 'agents-page',
  templateUrl: './agents-page.component.html',
  styleUrls: ['./agents-page.component.scss']
})
export class AgentsPageComponent implements OnInit {

   players: any[] = []
   selectedPlayer: any = "";
   lastSelectedPlayerID : number = 1;



  constructor() {
    console.log(agents);
    this.players = agents;
   }

  ngOnInit(): void {
  }

  selectPlayer(id: number){
    let clearId = id-1;
  
      this.selectedPlayer = this.players[id-1].name;
    
      this.lastSelectedPlayerID = clearId;
      
  }
}
