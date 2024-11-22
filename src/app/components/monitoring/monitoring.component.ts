import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define la interfaz para el estado de los sensores
interface SensorData {
  date: string;
  humidity: number;
  temperature: number;
  light: number;
}

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss'
})
export class MonitoringComponent {
  // Simulación de datos de sensores
  sensorData: SensorData[] = [
    { date: '2024-10-01', humidity: 70, temperature: 22, light: 50 },
    { date: '2024-10-02', humidity: 65, temperature: 21, light: 55 },
    { date: '2024-10-03', humidity: 75, temperature: 23, light: 60 },
  ];

  selectedPeriod: string = 'daily'; // Periodo seleccionado por defecto

  constructor(private router: Router) {}

  // Filtra los datos según el periodo seleccionado
  filterData(period: string) {
    this.selectedPeriod = period;
    // Implementar la lógica para filtrar datos según el periodo
  }

  // Redirige a la pantalla de registro de plantas
  redirectToRegister() {
    this.router.navigate(['../register-plants']);
  }

  // Redirige a la pantalla de Dashboard
  redirectToDashboard() {
    this.router.navigate(['../dashboard']);
  }

  // Redirige a la pantalla de Dashboard
  redirectToCentralPanel() {
    this.router.navigate(['../central-panel']);
  }
}