import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  constructor() {  }
  logForm(form) {
    const jsonForm = JSON.stringify({username: form.value.usuario, senha: form.value.senha});
    fetch('/login', {
      method: 'POST',
      body: jsonForm
    }).then((result) => {
      if (result.status === 200) {
        window.location.href = 'http://google.com.br';
      } else {
        window.location.href = 'http://192.168.88.182:8100/tela-privada';
      }
    });
  }
}