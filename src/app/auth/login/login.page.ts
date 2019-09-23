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
    const jsonForm = JSON.stringify({username: form.value.email, senha: form.value.password});
    debugger;
    fetch('/login', {
      method: 'POST',
      body: jsonForm
    }).then((result) => {
      if (result.status === 200) {
        window.location.href = 'http://google.com.br';
      } else {
        window.localStorage.setItem('ACCESS_TOKEN', 'funciona pa carai');
        this.router.navigateByUrl('tela-privada');
      }
    });
    }
}