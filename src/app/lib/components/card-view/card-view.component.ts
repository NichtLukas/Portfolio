import { Component, Input, OnInit } from '@angular/core';
import { CardTemplate } from '../card-template/card-template.interface';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() cards:CardTemplate[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
