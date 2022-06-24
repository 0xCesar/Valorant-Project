import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {


  @Input() title: string = "Agents";

  constructor() { }

  ngOnInit(): void {
  }

}
