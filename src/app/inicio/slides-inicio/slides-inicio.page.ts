import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides-inicio',
  templateUrl: './slides-inicio.page.html',
  styleUrls: ['./slides-inicio.page.scss'],
})
export class SlidesInicioPage implements OnInit {
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides-inicio/ranking.png',
      titulo: 'Ranking de puntajes',
      desc: 'Mira en tiempo real la puntuacion de tu colegio!!'
    },
    {
      img: '/assets/slides-inicio/newspaper.png',
      titulo: 'Noticias y anuncios',
      desc: 'Estaras al tanto con lo que pasa en el evento y no te perderas de nada, tambien estaras al tanto de los anuncios de los.'
    },
    {
      img: '/assets/slides-inicio/timeline.png',
      titulo: 'Programa del evento',
      desc: 'Estara a tu disposición el programa del evento y los detalles de las actividades a realizarse.'
    },
    {
      img: '/assets/slides-inicio/codigo-qr.png',
      titulo: 'Control de eventos',
      desc: 'El control de eventos para la parte administradores'
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigateByUrl('inicio-login');
  }
}
