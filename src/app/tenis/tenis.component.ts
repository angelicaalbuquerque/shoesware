import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss'],
})
export class TenisComponent implements OnInit {
  tenisList = [
    {
      showPromotion: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitle: 'Tênis Nike Revolution 5 - Feminino',
      oldPrice: 319.99,
      newPrice: 219.99,
      cardSize: 36,
      cardColour: 'Branco',
    },
    {
      showPromotion: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      cardTitle: 'Tênis Adidas Lite Racer - Masculino',
      oldPrice: 249.99,
      newPrice: 199.99,
      cardSize: 36,
      cardColour: 'Preto',
    },
    {
      showPromotion: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      cardTitle: 'Tênis Puma - Masculino',
      oldPrice: 249.99,
      newPrice: 199.99,
      cardSize: 36,
      cardColour: 'Azul',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
