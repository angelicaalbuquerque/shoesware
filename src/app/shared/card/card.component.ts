import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('showPromotion') showPromotion: boolean = false;
  @Input() cardTitle: string = '';
  @Input() cardImg: string = '';
  @Input() oldPrice: string = '';
  @Input() newPrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
