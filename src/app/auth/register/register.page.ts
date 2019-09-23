import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  register(form) {
    const jsonForm = JSON.stringify({nome: form.value.nome, email: form.value.email, senha: form.value.password,
      telefone: form.value.telefone, logradouro: form.value.logradouro, numero: form.value.numero,
      complemento: form.value.complemento, bairro: form.value.bairro, cidade: form.value.cidade, estado: form.value.estado});
    fetch('register', {
      method: 'POST',
      body: jsonForm
    }).then((result) => {
      if (result.status === 200) {
        alert('registrado Com Sucesso')
        window.location.href = 'http://google.com.br';
      } else {
        alert('erro');
        window.localStorage.setItem('ACCESS_TOKEN', 'funciona pa carai');
        this.router.navigateByUrl('tela-privada');
      }
    });
  }

}
