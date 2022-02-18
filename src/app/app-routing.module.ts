import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadernavComponent } from './shared/headernav/headernav.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'headernav', component: HeadernavComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
