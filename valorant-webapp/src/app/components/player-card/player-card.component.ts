import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() PlayerRegion: string = 'United Kingdom';
  @Input() PlayerName: string = 'phoenix';
  PlayerImg: string =  "assets/player/player-" + this.PlayerName + ".png";
  constructor() { 
   
  }
 

  ngOnInit(): void {
    this.PlayerImg = "assets/player/player-" + this.PlayerName + ".png";
  }

}
