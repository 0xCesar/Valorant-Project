import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'agents-page',
  templateUrl: './agents-page.component.html',
  styleUrls: ['./agents-page.component.scss']
})
export class AgentsPageComponent implements OnInit {

   players: any[] = [
    {"name": 'phoenix', "region": "United Kingdom"},
    {"name": 'jett',    "region": "South Korea"},
    {"name": 'sova',    "region": "Russia"},
    {"name": 'sage',    "region": "China"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
