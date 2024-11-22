import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }, // Ruta hacia el componente de registro
  // Otras rutas...
];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  users = [
    { email: 'donoban.figueredo2053@gmail.com', password: 'Felipe16-11.2018' },
    { email: 'usuario2@example.com', password: 'contraseña2' },
  ];
   
  passwordVisible: boolean = false; // Estado para la visibilidad de la contraseña

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      //alert('Inicio de sesión exitoso!');
      this.router.navigate(['../central-panel']); // Redirigir al Dashboard
      this.startTimeout();
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }
  
  startTimeout() {
    setTimeout(() => {
      this.router.navigate(['../home']); // Redirigir a la pantalla de inicio
    }, 3000); // Espera de 3 segundos antes de redirigir
  }
}