import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardsList = [
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitulo: 'Tênis Nike Revolution 5 - Feminino',
      oldPrice: 319.99,
      newPrice: 219.99,
      cardColour: 'Branco',
      cardSize: 36,
    },
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      cardTitulo: 'Meia Asics Single Tech - Adulto',
      oldPrice: 24.99,
      newPrice: 19.99,
      cardColour: 'Cinza Mescla',
      cardSize: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      cardTitulo: 'Tênis Adidas Lite Racer - Masculino',
      oldPrice: 249.99,
      newPrice: 199.99,
      cardColour: 'Preto',
      cardSize: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      cardTitulo: 'Tênis Puma - Masculino',
      oldPrice: 249.99,
      newPrice: 199.99,
      cardColour: 'Azul',
      cardSize: 36,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
