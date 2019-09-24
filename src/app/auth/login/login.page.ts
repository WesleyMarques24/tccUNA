import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  router: Router) {
   }

  ngOnInit() {
  }
  login(form) {
    const jsonForm = JSON.stringify({usuario: form.value.email, senha: form.value.password});
    debugger;
    fetch('/usuarios/login', {
      method: 'POST',
      body: jsonForm
    }).then((result) => {
      if (result.status === 200) {
        this.router.navigateByUrl('tela-privada');
      } else {
        alert ("Usuário ou senha incorreto");
      }
    });
    }
}