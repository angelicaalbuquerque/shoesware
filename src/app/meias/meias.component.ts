import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meias',
  templateUrl: './meias.component.html',
  styleUrls: ['./meias.component.scss'],
})
export class MeiasComponent implements OnInit {
  meiasList = [
    {
      showPromotion: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      cardTitle: 'Meia Asics Single Tech - Adulto',
      oldPrice: 'R$ 24,99',
      newPrice: 'R$ 19,99',
    },
    {
      showPromotion: false,
      imgUrl: '/assets/img/produtos/meias/meia-branca.png',
      cardTitle: 'Meia Asics Single Tech - Adulto',
      oldPrice: 'R$ 24,99',
      newPrice: 'R$ 19,99',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
