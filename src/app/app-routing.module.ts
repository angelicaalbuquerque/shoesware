import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeiasComponent } from './meias/meias.component';
import { TenisComponent } from './tenis/tenis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tenis', component: TenisComponent },
  { path: 'meias', component: MeiasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
