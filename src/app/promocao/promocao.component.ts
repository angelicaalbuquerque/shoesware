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
      titulo: 'Tênis Nike Revolution 5 - Feminino',
      precoAntigo: 319.99,
      precoAtual: 219.99,
      tamanho: 36,
      cor: 'Branco',
    },
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      titulo: 'Meia Asics Single Tech - Adulto',
      precoAntigo: 24.99,
      precoAtual: 19.99,
      tamanho: 36,
      cor: 'Cinza Mescla',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
