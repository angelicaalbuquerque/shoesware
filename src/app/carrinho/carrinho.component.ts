import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];

  subtotal = 0;
  desconto = 0;
  total = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.getCarrinho().subscribe((carrinho) => {
      console.log(carrinho);
      this.carrinho = carrinho;

      this.calcular();
    });
  }

  decrementa(produto: Produto) {
    this.carrinhoService.decrementar(produto);
  }

  incrementa(produto: Produto) {
    this.carrinhoService.incrementar(produto);
  }

  remove(index: number) {
    this.carrinhoService.removerProduto(index);
  }

  atualizarQuantidade(produto: any, index: number) {
    this.carrinhoService.atualizarProduto(produto, index);
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
    this.carrinhoService.limparCarrinho();
  }
}

export interface Produto {
  produto: {
    nome: string;
    cor: string;
    tamanho: number;
    preco: number;
    imagem: string;
  };
  quantidade: number;
}
