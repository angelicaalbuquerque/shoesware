import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meias',
  templateUrl: './meias.component.html',
  styleUrls: ['./meias.component.scss'],
})
export class MeiasComponent implements OnInit {
  meiasList = [
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      cardTitle: 'Meia Asics Single Tech - Adulto',
      oldPrice: 24.99,
      newPrice: 19.99,
      cardSize: 36,
      cardColour: 'Cinza Mescla',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/meias/meia-branca.png',
      cardTitle: 'Meia Asics Single Tech - Adulto',
      oldPrice: 24.99,
      newPrice: 19.99,
      cardSize: 42,
      cardColour: 'Branco',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
