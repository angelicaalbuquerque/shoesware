import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss'],
})
export class TenisComponent implements OnInit {
  cardsList = [
    {
      showPromotion: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitle: 'Tênis Nike Revolution 5 - Feminino',
      oldPrice: 'R$ 319,99',
      newPrice: 'R$ 219,99',
    },
    {
      showPromotion: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      cardTitle: 'Tênis Adidas Lite Racer - Masculino',
      oldPrice: 'R$ 249,99',
      newPrice: 'R$ 199,99',
    },
    {
      showPromotion: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      cardTitle: 'Tênis Puma - Masculino',
      oldPrice: 'R$ 249,99',
      newPrice: 'R$ 199,99',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
