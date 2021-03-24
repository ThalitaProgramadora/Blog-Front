import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cadastrar', component:CadastrarComponent}
=======
  {path:'', redirectTo: 'login', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastrar', component: CadastrarComponent}
>>>>>>> 0ce3533c04e09cf806b3c5efe50ea27ecd141a81
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
