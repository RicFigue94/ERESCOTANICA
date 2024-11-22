import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

interface PlantStatus {
  name: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  plantStatuses: PlantStatus[] = [
    { name: 'Tomate', status: 'Saludable' },
    { name: 'Lechuga', status: 'Enfermo' },
    { name: 'Albahaca', status: 'Saludable' },
  ];

  // Simulación de gráficos (puedes usar bibliotecas para gráficos más adelante)
  chartData = {
    humidity: 75, // Porcentaje
    light: 60, // Porcentaje
    temperature: 22, // Grados Celsius
  };

  constructor(private router: Router) {}

  // Redirige a la pantalla de registro de huertos
  redirectToRegister() {
    this.router.navigate(['../register-plants']);
  }

  // Redirige a la pantalla de monitoreo en tiempo real
  redirectToMonitoring() {
    this.router.navigate(['../monitoring']);
  }

   // Redirige a la pantalla de Dashboard
  redirectToCentralPanel() {
    this.router.navigate(['../central-panel']);
  }
}