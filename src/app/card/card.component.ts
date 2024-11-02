import { Component } from '@angular/core';

@Component({
  selector: 'card-app',
  templateUrl: './card.component.html',
  styleUrl: 'card.component.css',
})
export class Card {
  title: string = 'for week';
  unit: string = 'Basic';
  price: number = 56;
}
