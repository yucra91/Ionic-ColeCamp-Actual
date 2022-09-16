import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent implements OnInit {
  @Input() titulo:string='';

  constructor() { }

  ngOnInit() {}

}
