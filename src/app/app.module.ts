import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeadernavComponent } from './shared/headernav/headernav.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CardComponent } from './shared/card/card.component';
import { TenisComponent } from './tenis/tenis.component';
import { MeiasComponent } from './meias/meias.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    HeadernavComponent,
    SliderComponent,
    CardComponent,
    TenisComponent,
    MeiasComponent,
    CarrinhoComponent,
    ProdutoDescricaoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
