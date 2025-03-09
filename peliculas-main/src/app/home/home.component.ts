import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { NavComponent } from '../components/nav/nav.component';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [NavComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

selectedMovie:Movie | null=null; 

showInfo: boolean=false; 

fnCallFromChild(movie:any) {
  this.showInfo=true;
  this.selectedMovie=movie; 
}

fnClosePopUp(){
  this.showInfo=false; 
}

fnGetItemsNumber(): any[] {
  const size = Math.ceil(this.movies.length / 5);
  const array = new Array(size).fill(0);
  return array;
  }

fnGetItems(i: number): Movie[] {
    const start = i * 5;
    const end = start + 5;
    let subSetMovies: Movie[] = [];
    subSetMovies = this.movies.slice(start, end);
    return subSetMovies;
    }


movies: Movie[] = [
    {
      title: '1. Blue Ruin',
      img: 'assets/imgs/blue_ruin.jpg',
      rate: '★★★★★',
      description:
        'La vida tranquila de un forastero se transforma totalmente cuando él regresa a su casa de la infancia y se involucra en una pelea brutal para proteger a su familia distanciada.',
      year: 2013,
      genre: 'Suspenso',
    },
    {
      title: '2. Guardians of the Galaxy',
      img: 'assets/imgs/guardians_of_the_galaxy.jpg',
      rate: '★★★★★',
      description:
        'El temerario aventurero Peter Quill ha robado una misteriosa esfera codiciada por Ronan, un poderoso villano cuyas ambiciones amenazan a todo el universo. Quill se convierte en la presa más codiciada por todos los cazarrecompensas de la galaxia.',
      year: 2014,
      genre: 'Ciencia ficción y cine de superhéroes',
    },
    {
      title: '3. Snowpiercer',
      img: 'assets/imgs/snowpiercer.jpg',
      rate: '★★★★★',
      description:
        'El calentamiento global ha aniquilado a casi toda la humanidad. Los supervivientes viajan en un tren que atraviesa un mundo de hielo y nieve, un tren en el que hay dos clases sociales claramente diferenciadas, pero el descontento lleva a la revuelta.',
      year: 2013,
      genre: 'Ciencia Ficción',
    },
    {
      title: '4. Her',
      img: 'assets/imgs/her.jpg',
      rate: '★★★★★',
      description:
        'En Los Ángeles, Theodore es un escritor desanimado que escribe cartas emotivas para otras personas. Él desarrolla una relación amorosa especial con el sistema operativo de su ordenador y su teléfono, una intuitiva y sensible entidad llamada Samantha.',
      year: 2013,
      genre: 'Romance / Comedia',
    },
    {
      title: '5. Whiplash',
      img: 'assets/imgs/whiplash.jpg',
      rate: '★★★★★',
      description:
        'El objetivo de Andrew Neiman, un joven y ambicioso baterista de jazz, es triunfar en el elitista Conservatorio de Música de la Costa Este. Marcado por el fracaso de la carrera literaria de su padre, Andrew alberga sueños de grandeza.',
      year: 2014,
      genre: 'Drama Musical',
    },
    {
      title: '6. Nightcrawler',
      img: 'assets/imgs/nightcrawler.jpg',
      rate: '★★★★☆',
      description:
        'Louis Bloom es un joven de Los Ángeles, sin empleo ni escrúpulos, quien, después de haber sido testigo de un accidente espeluznante, decide que quiere ganar fama y fortuna a través del periodismo sensacionalista.',
      year: 2014,
      genre: 'Crimen',
    },
    {
      title: '7. The Lego Movie',
      img: 'assets/imgs/lego_movie.jpg',
      rate: '★★★★☆',
      description:
        'Emmet, una figurilla ordinaria de LEGO, es identificada por error como la persona más extraordinaria y la clave para salvar al mundo. Se ve entonces acompañado por un grupo de desconocidos y juntos se embarcan en una búsqueda para vencer a un terrible tirano con planes malvados.',
      year: 2014,
      genre: 'Comedia',
    },
    {
      title: '8. Boyhood',
      img: 'assets/imgs/boyhood.jpg',
      rate: '★★★★☆',
      description:
        'Mason, un pequeño soñador, se enfrenta a la primera gran convulsión de su vida: Olivia, su entregada y luchadora madre soltera, ha decidido mudarse con él y su hermana Samantha a Houston, justo cuando su padre acaba de regresar de Alaska.',
      year: 2014,
      genre: 'Drama',
    },
    {
      title: '9. The Babadook',
      img: 'assets/imgs/babadook.jpg',
      rate: '★★★★☆',
      description:
        'Seis años después de la violenta muerte de su marido, Amelia sigue intentando educar a su hijo de seis años, Samuel, que vive aterrorizado por un monstruo que se le aparece en sueños y amenaza con asesinarlos. Un inquietante libro de cuentos, "The Babadook", aparece en la casa. Samuel está convencido de que el "Babadook" es la criatura que aparece en sus sueños.',
      year: 2014,
      genre: 'Terror',
    },
    {
      title: '10. Gloria',
      img: 'assets/imgs/gloria.jpg',
      rate: '★★★★☆',
      description:
        'A sus 58 años y divorciada, Gloria llena sus días de actividades y sus noches de fiesta en locales para adultos, pero su felicidad se verá alterada al encontrarse con Rodolfo, recientemente separado, que se obsesiona con ella.',
      year: 2013,
      genre: 'Drama',
    },
  ];
}
