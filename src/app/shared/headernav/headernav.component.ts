import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss'],
})
export class HeadernavComponent implements OnInit {
  totalItensCarrinho = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    console.log(this.carrinhoService);
    this.carrinhoService.getCarrinho().subscribe((carrinho) => {
      console.log('x', carrinho);
      // this.totalItensCarrinho = carrinho.length;
      this.totalItensCarrinho = carrinho.reduce(
        (acc: any, curr: any) => acc + curr.quantidade,
        0
      );
    });
  }
}
