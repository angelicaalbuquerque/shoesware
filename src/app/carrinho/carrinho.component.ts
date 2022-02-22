import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [
    {
      produto: {
        nome: 'Produto 1',
        cor: 'branco',
        tamanho: 36,
        preco: 24,
        imagem: '/assets/img/produtos/tenis/tenis-branco.png',
      },
      quantidade: 1,
    },
    {
      produto: {
        nome: 'Produto 2',
        cor: 'preto',
        tamanho: 36,
        preco: 10,
        imagem: '/assets/img/produtos/tenis/tenis-azul.png',
      },
      quantidade: 4,
    },
    {
      produto: {
        nome: 'Produto 3',
        cor: 'marrom',
        tamanho: 40,
        preco: 15,
        imagem: '/assets/img/produtos/tenis/tenis-preto.png',
      },
      quantidade: 2,
    },
  ];

  subtotal = 0;
  desconto = 0;
  total = 0;

  constructor() {}

  ngOnInit(): void {
    this.calcular();
  }

  decrementa(produto: Produto) {
    if (produto.quantidade < 1) {
      return;
    }

    produto.quantidade--;

    this.calcular();
  }

  incrementa(produto: Produto) {
    produto.quantidade++;
    this.calcular();
  }
  remove(index: number) {
    console.log(index);
    this.carrinho.splice(index, 1);
    this.calcular();
  }

  calcular() {
    this._calcularDesconto();
    this._calcularTotal();
  }

  private _calcularTotal() {
    let subtotal = 0;
    this.carrinho.forEach((produto) => {
      subtotal += produto.quantidade * produto.produto.preco;
    });

    this.subtotal = subtotal;

    this.total = this.subtotal - this.desconto;
  }

  private _calcularDesconto() {
    const maiorOuIgualADois = this.carrinho.filter((x) => x.quantidade >= 2);
    const descontos = maiorOuIgualADois.map((x) => x.produto.preco);
    this.desconto = descontos.reduce((acc, curr) => acc + curr, 0);
  }

  limparCarrinho() {
    this.carrinho = [];
  }
}

interface Produto {
  produto: {
    nome: string;
    cor: string;
    tamanho: number;
    preco: number;
    imagem: string;
  };
  quantidade: number;
}
