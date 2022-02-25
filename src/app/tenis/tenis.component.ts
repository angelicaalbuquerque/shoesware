import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss'],
})
export class TenisComponent implements OnInit {
  tenisList = [
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      cardTitulo: 'Tênis Nike Revolution 5 - Feminino',
      precoAntigo: 319.99,
      precoAtual: 219.99,
      cardSize: 36,
      cardColour: 'Branco',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      cardTitulo: 'Tênis Adidas Lite Racer - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cardSize: 36,
      cardColour: 'Preto',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      cardTitulo: 'Tênis Puma - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      cardSize: 36,
      cardColour: 'Azul',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
