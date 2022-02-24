import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Produto } from '../carrinho/carrinho.component';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private _carrinho: Produto[] = [];
  private _chave: string = '@Siteware';

  carrinho: BehaviorSubject<any> = new BehaviorSubject(this._carrinho);

  constructor() {
    this._buscarCarrinhoLocalStorage();
  }

  getCarrinho() {
    return this.carrinho.asObservable();
  }

  adicionarProduto(produto: Produto) {
    const index = this._carrinho.findIndex(
      (x) => x.produto.nome === produto.produto.nome
    );
    if (index >= 0) {
      this._carrinho[index].quantidade++;
      this.atualizarProduto(this._carrinho[index], index);
    } else {
      this._carrinho.push(produto);
      this._emitir();
    }
  }

  atualizarProduto(produto: Produto, index: number) {
    this._carrinho[index] = produto;
    this._emitir();
  }

  incrementar(produto: Produto) {
    produto.quantidade++;
    this._emitir();
  }

  decrementar(produto: Produto) {
    if (produto.quantidade < 1) {
      return;
    }

    produto.quantidade--;
    this._emitir();
  }

  removerProduto(index: number) {
    this._carrinho.splice(index, 1);
    this._emitir();
  }

  limparCarrinho() {
    this._carrinho = [];
    this._emitir();
  }

  private _emitir() {
    this._salvarLocalStorage();
    this.carrinho.next(this._carrinho);
  }

  private _salvarLocalStorage() {
    localStorage.setItem(this._chave, JSON.stringify(this._carrinho));
  }

  private _buscarCarrinhoLocalStorage() {
    const dados = localStorage.getItem(this._chave);
    if (dados) {
      this._carrinho = JSON.parse(dados);
    } else {
      this._carrinho = [];
    }
  }
}

const carrinhoMock = [
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
