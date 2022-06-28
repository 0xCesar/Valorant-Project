import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() PlayerRegion: string = 'United Kingdom';
  @Input() PlayerName: string = 'phoenix';
  @Input() selectedPlayer : boolean = false;
  @Input() PlayerSkills: any[] = [];
  PlayerImg: string =  "assets/player/player-" + this.PlayerName + ".png";
  playerskill1 : string = ""; 
  playerskill2 : string = "";
  playerskill3 : string = "";
  playerskill4 : string = "";
 
  constructor() { 
   
  }
 

  ngOnInit(): void {
    this.PlayerImg = "assets/player/player-" + this.PlayerName + ".png";
    this.playerskill1 = "assets/player/player-abilities/" + this.PlayerSkills[0].name + ".png";
    this.playerskill2 = "assets/player/player-abilities/" + this.PlayerSkills[1].name + ".png";
    this.playerskill3 = "assets/player/player-abilities/" + this.PlayerSkills[2].name + ".png";
    this.playerskill4 = "assets/player/player-abilities/" + this.PlayerSkills[3].name + ".png";
    console.log(this.playerskill4);
  }

}
