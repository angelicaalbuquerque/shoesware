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
      titulo: 'Meia Asics Single Tech - Adulto',
      precoAntigo: 24.99,
      precoAtual: 19.99,
      tamanho: 36,
      cor: 'Cinza Mescla',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/meias/meia-branca.png',
      titulo: 'Meia Asics Single Tech - Adulto',
      precoAntigo: 24.99,
      precoAtual: 19.99,
      tamanho: 42,
      cor: 'Branco',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
