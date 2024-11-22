import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

interface RegisterForm {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

interface User {
  email: string | null;
  password: string | null;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  registerForm: FormGroup; // FormGroup sin tipo específico, para evitar errores
  users: User[] = []; // Define el tipo de la lista de usuarios

  passwordVisible: boolean = false; // Estado para la visibilidad de la contraseña
  confirmPasswordVisible: boolean = false; // Estado para la visibilidad de la confirmación de contraseña

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializa el formulario con validaciones
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: [null, [Validators.required]],
    });
  }

  // Validador personalizado para la contraseña
  passwordValidator(control: AbstractControl) {
    const password = control.value;
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    return hasNumber && hasLetter ? null : { passwordInvalid: true };
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      // Verificar si el correo ya está en uso
      if (this.users.find((user) => user.email === email)) {
        alert('Este correo electrónico ya está registrado.');
        return;
      }

      // Registrar al nuevo usuario
      this.users.push({ email, password });
      alert(`Registro exitoso. Se ha enviado un correo de confirmación a ${email}.`);
      this.router.navigate(['/login']); // Redirigir a la pantalla de login
    } else {
      alert('Por favor, completa todos los campos requeridos correctamente.');
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Método para alternar la visibilidad de la confirmación de contraseña
  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
}