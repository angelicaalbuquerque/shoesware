import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('mostrarPromocao') mostrarPromocao: boolean = false;
  @Input() titulo: string = '';
  @Input() cardImg: string = '';
  @Input() cor: string = '';
  @Input() tamanho: number = 0;
  @Input() precoAntigo: number = 0;
  @Input() precoAtual: number = 0;

  constructor(private _carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  adicionarItem() {
    this._carrinhoService.adicionarProduto({
      produto: {
        nome: this.titulo,
        cor: this.cor,
        tamanho: this.tamanho,
        preco: this.precoAtual,
        precoAntigo: this.precoAntigo,
        imagem: this.cardImg,
      },
      quantidade: 1,
    });
  }
}
