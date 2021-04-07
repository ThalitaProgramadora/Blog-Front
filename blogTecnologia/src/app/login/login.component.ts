import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/User.login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    environment.token == ''
  }
  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
        this.userLogin = resp
        environment.token = this.userLogin.token
        environment.nome = this.userLogin.nome
        environment.foto = this.userLogin.foto
        environment.id = this.userLogin.id
        
        //console.log(environment.token)
        //console.log(environment.nome)
        //console.log(environment.foto)
        //console.log(environment.id)

        this.userLogin.foto
        this.router.navigate(['/inicio'])
    },erro => {
      if(erro.status == 500){
        alert('usuário ou senha inválidos!!')
      }
    })
  }

}
