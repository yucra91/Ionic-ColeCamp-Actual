import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-estudiante',
  templateUrl: './inicio-estudiante.page.html',
  styleUrls: ['./inicio-estudiante.page.scss'],
})
export class InicioEstudiantePage implements OnInit {

  constructor() { }
  noticiasDest = [
    {
      autor: {
        nombre: 'Juan Carlos',
      },
      titulo: 'Colegio con muchas ganas de competir',
      descripcion: '',
      urlimg: 'assets/noticias/not1.jpg',
      publicado: '2022-09-16T11:09:46Z',
      contenido: ''
    },
    {
      autor: {
        nombre: 'Romer yucra',
      },
      titulo: 'Estudiantes emocionados por las actividades',
      descripcion: '',
      urlimg: 'assets/noticias/not2.jpg',
      publicado: '2022-09-16T11:09:46Z',
      contenido: ''
    },
    {
      autor: {
        nombre: 'Jose Ramirez',
      },
      titulo: 'Colecamp una actividad inpulsada por la UAB',
      descripcion: '',
      urlimg: 'assets/noticias/not3.jpg',
      publicado: '2022-09-16T11:09:46Z',
      contenido: ''
    }
  ]
  ngOnInit() {
  }

}
