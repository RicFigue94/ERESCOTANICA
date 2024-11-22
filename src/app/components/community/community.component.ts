import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define la interfaz para las publicaciones de la comunidad
interface CommunityPost {
  id: number;
  photoUrl: string;
  description: string;
  user: string;
}

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
 // Simulación de datos de publicaciones de la comunidad
  posts: CommunityPost[] = [
    {
      id: 1,
      photoUrl: 'https://via.placeholder.com/150',
      description: 'Consejos para cultivar tomates.',
      user: 'Usuario1',
    },
    {
      id: 2,
      photoUrl: 'https://via.placeholder.com/150',
      description: 'Cómo cuidar las plantas de interior.',
      user: 'Usuario2',
    },
    {
      id: 3,
      photoUrl: 'https://via.placeholder.com/150',
      description: 'Ideas para un huerto en casa.',
      user: 'Usuario3',
    },
  ];

  constructor(private router: Router) {}

  // Redirige a la pantalla de publicación de nueva entrada
  createPost() {
    this.router.navigate(['/create-post']); // Cambia esta ruta a la pantalla de crear publicación
  }
  // Redirige a la pantalla del panel central
  redirectToCentralPanel() {
    this.router.navigate(['../central-panel']);
    }
}
