import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'agents-page',
  templateUrl: './agents-page.component.html',
  styleUrls: ['./agents-page.component.scss']
})
export class AgentsPageComponent implements OnInit {

   players: any[] = [
    {"name": 'phoenix',      "region": "United Kingdom"},
    {"name": 'jett',         "region": "South Korea"},
    {"name": 'sova',         "region": "Russia"},
    {"name": 'sage',         "region": "China"},
    {"name": 'raze',         "region": "Brazil"},
    {"name": 'breach',       "region": "Sweden"},
    {"name": 'omen',         "region": "Shadows"},
    {"name": 'brimstone',    "region": "United States"},
    {"name": 'viper',        "region": "United States"},
    {"name": 'cypher',       "region": "Marocco"},
    {"name": 'reyna',        "region": "Mexico"},
    {"name": 'killjoy',      "region": "Germany"},
    {"name": 'skye',         "region": "Australia"},
    {"name": 'yoru',         "region": "Japan"},
    {"name": 'astra',        "region": "Ghana"},
    {"name": 'kayo',         "region": "N/A"},
    {"name": 'chamber',      "region": "France"},
    {"name": 'neon',         "region": "Philippine"},
    {"name": 'fade',         "region": "Turkey"} 
   ]

  constructor() {

   }

  ngOnInit(): void {
  }

}
