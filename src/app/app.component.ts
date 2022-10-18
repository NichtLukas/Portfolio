import { Component } from '@angular/core';
import { CardTemplate } from './lib/components/card-template/card-template.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio_LBE';
  testCard: CardTemplate =  {
    title: 'title',
    subtitle: 'subtitle',
    img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    text: 'text'
  }
}
