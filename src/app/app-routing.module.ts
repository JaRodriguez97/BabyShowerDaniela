import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadChildren: () =>
      import('./modules/splash/splash.module').then((m) => m.SplashModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule),
    title: 'Bienvenido al Baby Shower de la Pequeña Daniela',
  },
  {
    path: 'marco',
    loadChildren: () =>
      import('./modules/marco/marco.module').then((m) => m.MarcoModule),
    title: 'Protagonista del Baby Shower',
  },
  {
    path: 'confirmacion',
    loadChildren: () =>
      import('./modules/confirmacion/confirmacion.module').then(
        (m) => m.ConfirmacionModule
      ),
    title: 'Confirma tu Asistencia al Mejor Baby Shower',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
