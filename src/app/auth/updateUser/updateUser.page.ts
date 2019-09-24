import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateUser',
  templateUrl: './updateUser.page.html',
  styleUrls: ['./updateUser.page.scss'],
})
export class updateUserPage implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  updateUser(form) {
    const jsonForm = JSON.stringify({nome: form.value.nome, email: form.value.email, senha: form.value.password,
      celular: form.value.telefone, logradouro: form.value.logradouro, numero: form.value.numero,
      complemento: form.value.complemento, bairro: form.value.bairro, cidade: form.value.cidade, estado: form.value.estado});
    fetch('usuario/'+form.value.id, {
      method: 'PUT',
      body: jsonForm
    }).then((result) => {
      if (result.status === 200) {
        alert('registrado Com Sucesso')
        this.router.navigateByUrl('tela-privada');
      } else {
        alert('Erro ao cadastrar');
       }
    });
  }

}
