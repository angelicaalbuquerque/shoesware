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
    this.carrinhoService.getCarrinho().subscribe((carrinho) => {
      this.totalItensCarrinho = carrinho.reduce(
        (acc: any, curr: any) => acc + curr.quantidade,
        0
      );
    });
  }
}
