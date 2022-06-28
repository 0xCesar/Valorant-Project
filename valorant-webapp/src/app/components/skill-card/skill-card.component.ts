import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() TypeSkill : string = "Basic";
  @Input() DescriptionSkill : string = " Something ";
  @Input() TitleSkill: string = "Basic Something";
  src : string = "assets/player/player-abilities/AFTERSHOCK.png";

  constructor() { }
  

  ngOnInit(): void {
    this.src = "assets/player/player-abilities/" + this.TitleSkill + ".png";
  }

}
