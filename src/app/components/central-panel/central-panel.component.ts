import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Interfaz para incluir datos del usuario.
interface User {
  id: string;
  name: string;
}

@Component({
  selector: 'app-central-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './central-panel.component.html',
  styleUrl: './central-panel.component.scss'
})
export class CentralPanelComponent {

  user: User = {
    id: '1057596781A',
    name: 'Ricardo Figueredo',
  };

  constructor(private router: Router) {}

  // Método para redirigir a diferentes componentes
  navigateToCommunity() {
    this.router.navigate(['community'])
  }
  navigateToHome() {
    this.router.navigate(['home'])
  }
  navigateToMonitoring() {
    this.router.navigate(['monitoring'])
  }
  navigateToEducation() {
    this.router.navigate(['education'])
  }
  navigateToNotifications() {
    this.router.navigate(['notifications'])
  }
  navigateToRegisterPlants() {
    this.router.navigate(['register-plants'])
  }

  logout() {
    // Lógica para cerrar sesión
    this.router.navigate(['/login']); 
  }
}