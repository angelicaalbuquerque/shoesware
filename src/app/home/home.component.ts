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
      cor: 'Branco',
      tamanho: 36,
    },
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/meias/meia-preta.png',
      titulo: 'Meia Asics Single Tech - Adulto',
      precoAntigo: 24.99,
      precoAtual: 19.99,
      cor: 'Cinza Mescla',
      tamanho: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      titulo: 'Tênis Adidas Lite Racer - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cor: 'Preto',
      tamanho: 36,
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      titulo: 'Tênis Puma - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cor: 'Azul',
      tamanho: 36,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
