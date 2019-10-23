import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuardGuard } from './auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'auctions', pathMatch: 'full'},
  { path: 'advices', loadChildren: resolveAdvicesModule()}
  //{ path: 'advices', loadChildren: resolveAdvicesModule(), canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

function resolveAdvicesModule() {
  return () => import('./advice/advice.module')
    .then(m => m.AdviceModule)
    .catch();
}

