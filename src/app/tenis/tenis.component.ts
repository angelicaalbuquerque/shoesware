import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.scss'],
})
export class TenisComponent implements OnInit {
  tenisLista = [
    {
      mostrarPromocao: true,
      imgUrl: '/assets/img/produtos/tenis/tenis-branco.png',
      titulo: 'Tênis Nike Revolution 5 - Feminino',
      imagemDescricao: 'Tênis Nike Revolution 5 - Feminino',
      precoAntigo: 319.99,
      precoAtual: 219.99,
      tamanho: 36,
      cor: 'Branco',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-preto.png',
      titulo: 'Tênis Adidas Lite Racer - Masculino',
      imagemDescricao: 'Tênis Adidas Lite Racer - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      tamanho: 36,
      cor: 'Preto',
    },
    {
      mostrarPromocao: false,
      imgUrl: '/assets/img/produtos/tenis/tenis-azul.png',
      titulo: 'Tênis Puma - Masculino',
      imagemDescricao: 'Tênis Puma - Masculino',
      precoAntigo: 249.99,
      precoAtual: 199.99,
      tamanho: 36,
      cor: 'Azul',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
