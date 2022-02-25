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
      titulo: 'Tênis Nike Revolution 5 - Feminino',
      precoAntigo: 319.99,
      precoAtual: 219.99,
      cardColour: 'Branco',
      cardSize: 36,
    },
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      titulo: 'Meia Asics Single Tech - Adulto',
      precoAntigo: 24.99,
      precoAtual: 19.99,
      cardColour: 'Cinza Mescla',
      cardSize: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      titulo: 'Tênis Adidas Lite Racer - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cardColour: 'Preto',
      cardSize: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      titulo: 'Tênis Puma - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cardColour: 'Azul',
      cardSize: 36,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
