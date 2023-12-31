import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [
      { path: ':id/:usarname', component: SobreComponent },
      { path: 'borges', component: SobreComponent },
    ],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '404', component: PageErrorComponent }, // Uma das maneiras de tratar a rota coringa, caso a rota mencionada no browse não exista
  { path: '**', component: PageErrorComponent }, // Uma das maneiras de tratar a rota coringa, caso a rota mencionada no browse não exista
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
