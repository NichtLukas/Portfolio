import { Component, Input, OnInit } from '@angular/core';
import { CardTemplate } from './card-template.interface';


@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss']
})
export class CardTemplateComponent implements OnInit {

  @Input() cardTemplate!: CardTemplate;
  constructor() { }

  ngOnInit(): void {
  }

}
