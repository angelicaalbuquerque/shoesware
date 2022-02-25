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
  @Input() oldPrice: number = 0;
  @Input() newPrice: number = 0;

  constructor(private _carrinhoService: CarrinhoService) {}

  ngOnInit(): void {}

  adicionarItem() {
    this._carrinhoService.adicionarProduto({
      produto: {
        nome: this.cardTitulo,
        cor: this.cardColour,
        tamanho: this.cardSize,
        preco: this.newPrice,
        precoAntigo: this.oldPrice,
        imagem: this.cardImg,
      },
      quantidade: 1,
    });
  }
}
