import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Define la interfaz para las guías educativas
interface Guide {
  title: string;
  imageUrl: string;
  summary: string;
  category: string;
  url: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  // Simulación de guías educativas
  guides: Guide[] = [
    {
      title: 'Cómo cultivar tomates',
      imageUrl: 'https://via.placeholder.com/150',
      summary: 'Aprende a cultivar tomates en tu huerto.',
      category: 'Vegetales',
      url: 'https://www.youtube.com/watch?v=oWVPWGhofnU',
    },
    {
      title: 'Guía para el cuidado de plantas de interior',
      imageUrl: 'https://via.placeholder.com/150',
      summary: 'Consejos sobre cómo cuidar plantas en interiores.',
      category: 'Plantas de interior',
      url: 'https://www.youtube.com/watch?v=Y1jTRsBRh3g',
    },
    {
      title: 'Plantas para jardines verticales',
      imageUrl: 'https://via.placeholder.com/150',
      summary: 'Descubre las mejores plantas para jardines verticales.',
      category: 'Decoración',
      url: 'https://www.youtube.com/watch?v=DvI8RozQwLU',
    },
  ];

  selectedCategory: string = ''; // Almacena la categoría seleccionada

  // Filtrar guías según la categoría
  filterGuides(category: string) {
    this.selectedCategory = category;
    console.log('Categoría seleccionada:', this.selectedCategory);
    }
  
    constructor(private router: Router) {}
  // Redirige a la pantalla de Dashboard
  redirectToCentralPanel() {
    this.router.navigate(['../central-panel']);
    }

    openGuide(url: string) {
      window.open(url, '_blank'); // Abre la URL en una nueva pestaña
    }
    
}
