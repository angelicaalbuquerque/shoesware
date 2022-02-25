import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('mostrarPromocao') mostrarPromocao: boolean = false;
  @Input() cardTitulo: string = '';
  @Input() cardImg: string = '';
  @Input() cardColour: string = '';
  @Input() cardSize: number = 0;
  @Input() precoAntigo: number = 0;
  @Input() precoAtual: number = 0;

  constructor(private _carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  adicionarItem() {
    this._carrinhoService.adicionarProduto({
      produto: {
        nome: this.cardTitulo,
        cor: this.cardColour,
        tamanho: this.cardSize,
        preco: this.precoAtual,
        precoAntigo: this.precoAntigo,
        imagem: this.cardImg,
      },
      quantidade: 1,
    });
  }
}
