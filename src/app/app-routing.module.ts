import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { HomeComponent } from './home/home.component';
import { MeiasComponent } from './meias/meias.component';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';
import { PromocaoComponent } from './promocao/promocao.component';
import { TenisComponent } from './tenis/tenis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tenis', component: TenisComponent },
  { path: 'meias', component: MeiasComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'produto-descricao', component: ProdutoDescricaoComponent },
  { path: 'promocao', component: PromocaoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
