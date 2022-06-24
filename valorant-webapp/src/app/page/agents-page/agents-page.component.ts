import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'agents-page',
  templateUrl: './agents-page.component.html',
  styleUrls: ['./agents-page.component.scss']
})
export class AgentsPageComponent implements OnInit {

  @Input() title: string = "Agents";

  constructor() { }

  ngOnInit(): void {
  }

}
