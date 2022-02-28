import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { CanloadGuard } from './guards/canload.guard.service';



const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'covid', loadChildren: './components/dashboardmodule/dashboardmodule.module#DashboardmoduleModule',canLoad:[CanloadGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const components = [
  SigninComponent,
];
