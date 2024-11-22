import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Define la interfaz para las notificaciones
interface Notification {
  id: number;
  message: string;
  date: string; // Fecha de la notificación
}

// Define la interfaz para los datos del sensor
interface SensorData {
  humidity: number;
  temperature: number;
  light: number;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  // Simulación de datos de notificaciones
  notifications: Notification[] = [
    { id: 1, message: 'Recuerda regar tus plantas hoy.', date: '2024-10-05' },
    { id: 2, message: 'Fertiliza tus tomates este fin de semana.', date: '2024-10-07' },
    { id: 3, message: 'Cosecha lechugas antes del miércoles.', date: '2024-10-10' },
  ];

  // Simulación de datos de sensores
  sensorData: SensorData = {
    humidity: 75,      // Porcentaje de humedad
    temperature: 30,   // Grados Celsius
    light: 85,         // Porcentaje de luz
  };

  constructor(private router: Router) {
    this.checkSensorAlerts();
  }

  // Método para verificar alertas de sensores
  checkSensorAlerts() {
    if (this.sensorData.humidity < 30) {
      this.notifications.push({
        id: 4,
        message: 'Alerta: La humedad está baja. Considera regar tus plantas.',
        date: new Date().toLocaleDateString(),
      });
    }

    if (this.sensorData.temperature > 35) {
      this.notifications.push({
        id: 5,
        message: 'Alerta: La temperatura es alta. Asegúrate de proporcionar sombra a tus plantas.',
        date: new Date().toLocaleDateString(),
      });
    }

    if (this.sensorData.light < 40) {
      this.notifications.push({
        id: 6,
        message: 'Alerta: La luz solar es baja. Considera mover las plantas a un lugar más iluminado.',
        date: new Date().toLocaleDateString(),
      });
    }
  }

  // Método para eliminar una notificación
  dismissNotification(id: number) {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }
  
  navigateToCentralPanel() {
    this.router.navigate(['/central-panel']); // Cambia 'central-panel' por el nombre de la ruta correspondiente
  }
}