import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss'],
})
export class PromocaoComponent implements OnInit {
  promocaoList = [
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitulo: 'Tênis Nike Revolution 5 - Feminino',
      oldPrice: 319.99,
      newPrice: 219.99,
      cardSize: 36,
      cardColour: 'Branco',
    },
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      cardTitulo: 'Meia Asics Single Tech - Adulto',
      oldPrice: 24.99,
      newPrice: 19.99,
      cardSize: 36,
      cardColour: 'Cinza Mescla',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
