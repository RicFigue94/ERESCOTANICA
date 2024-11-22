import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Define la interfaz para las plantas
interface Plant {
  name: string;
  type: string; // Ejemplo: "Vegetal", "Floral", etc.
}

@Component({
  selector: 'app-register-plants',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-plants.component.html',
  styleUrl: './register-plants.component.scss'
})
export class RegisterPlantsComponent {
  // Formulario para el registro del huerto
  registerForm: FormGroup;

  // Simulación de tipos de plantas
  plantTypes: string[] = ['Tomate', 'Lechuga', 'Albahaca', 'Rosa', 'Girasol'];

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicializa el formulario con validaciones
    this.registerForm = this.fb.group({
      gardenSize: ['', [Validators.required]],
      gardenLocation: ['', [Validators.required]],
      selectedPlants: [[], [Validators.required]],
    });
  }

  // Método para manejar el avance a la siguiente pantalla
  nextStep() {
    if (this.registerForm.valid) {
      // Aquí puedes guardar los datos en la base de datos o en un servicio
      console.log('Datos del huerto:', this.registerForm.value);
      this.router.navigate(['../centra-panel']); // Cambia esta ruta a la siguiente pantalla
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  // Método para manejar el retroceso a la pantalla anterior
  previousStep() {
    this.router.navigate(['../central-panel']); // Cambia esta ruta a la pantalla anterior
  }
}