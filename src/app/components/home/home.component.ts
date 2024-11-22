import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: '../home/home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    // Simulación de datos de una posible API o base de datos
  plantData = [
    {
      name: 'Erescotánica',
      description: 'Aplicación para el cuidado de plantas',
    },
  ];

  constructor(private router: Router) {} // Inyectar el Router

  // Redirige al login
  redirectToLogin() {
    this.router.navigate(['/login']); // Redirigir a la pantalla de login
  }

  // Redirige al registro
  redirectToRegister() {
    this.router.navigate(['/register']); // Redirigir a la pantalla de registro
  }
  
  // Simulación de animación al cargar
  ngOnInit() {
    // Aquí puedes agregar la lógica de animación si lo deseas
  }
}
