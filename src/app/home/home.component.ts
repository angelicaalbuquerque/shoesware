import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardsList = [
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
