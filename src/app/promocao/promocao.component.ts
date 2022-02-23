import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss'],
})
export class PromocaoComponent implements OnInit {
  promocaoList = [
    {
      showPromotion: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitle: 'Tênis Nike Revolution 5 - Feminino',
      oldPrice: 'R$ 319,99',
      newPrice: 'R$ 219,99',
    },
    {
      showPromotion: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      cardTitle: 'Meia Asics Single Tech - Adulto',
      oldPrice: 'R$ 24,99',
      newPrice: 'R$ 19,99',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
