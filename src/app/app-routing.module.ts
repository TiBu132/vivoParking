import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },  {
    path: 'arriendo',
    loadChildren: () => import('./arriendo/arriendo.module').then( m => m.ArriendoPageModule)
  },
  {
    path: 'estacionamiento',
    loadChildren: () => import('./estacionamiento/estacionamiento.module').then( m => m.EstacionamientoPageModule)
  },
  {
    path: 'vehiculo',
    loadChildren: () => import('./vehiculo/vehiculo.module').then( m => m.VehiculoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
