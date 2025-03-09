import { Component } from '@angular/core';
import { CaruselComponent } from '../../components/carrusel/carusel.component';
import { CarruselConfig } from '../../models/CarruselConfig.model';
import { Item } from '../../models/items.model';

@Component({
  selector: 'app-home',
  imports: [CaruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  //Configuaracion para el primer carrusel

  carrusel1: CarruselConfig = {
    id_Carrosel: 1,
    layout: 'img', // le decimos que deplehara imagenes
    imgArray: [ //arreglo con las imagenes a mostrar
      'assets/imgs/COD.jpg',
      'assets/imgs/OnePiece.jpg',
      'assets/imgs/wukongwallpaper.jpg',
    ],
    autoPlaying: true, // se movera por si solo
    //configuracion solo necesaria en el otro modo de despliegue
    items: [],
    numberItems: 0,
  } 

  itemsArray1: Item[] = [ //array de elementos para el segundo carrusel
    {
      idItem: 1,
      img: 'assets/imgs/DOOM.jpg',
      name: 'Doom Eternal',
      description: 'Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones aniquilando demonios para detener la destrucción definitiva de la humanidad. ',
    },
    {
      idItem: 2,
      img: 'assets/imgs/rdr.jpg',
      name: 'Read dead redemption 2',
      description: 'Con más de 175 premios al "Juego del año" y más de 250 valoraciones perfectas, Red Dead Redemption 2 es una historia épica sobre el honor y la lealtad en los albores del siglo XX. Estados Unidos, 1899. ',
    },
    {
      idItem: 3,
      img: 'assets/imgs/wukong.jpg',
      name: 'Black Myth: Wukong',
      description: 'Black Myth: Wukong es un RPG de acción basado en la mitología china y en Viaje al Oeste, una de las cuatro grandes novelas clásicas de la literatura china.',
    },
    {
      idItem: 4,
      img: 'assets/imgs/indiana.jpg',
      name: 'Inidan jones',
      description: 'Descifra uno de los misterios más insondables de la historia en Indiana Jones y el Gran Círculo™, una aventura individual en primera persona que se desarrolla entre Indiana Jones: en busca del arca perdida™ e Indiana Jones y la última cruzada™. ',
    },
    {
      idItem: 5,
      img: 'assets/imgs/nightmares-3.jpg',
      name: 'little nightmares 3',
      description: 'Little Nightmares III es una perturbadora aventura atmosférica en la que los grandes amigos Low y Alone, que quieren huir de la Nada, colaborarán para resolver puzles y sobrevivir en un mundo de pesadilla.',
    },
    {
      idItem: 6,
      img: 'assets/imgs/silent-hill-2.jpg',
      name: 'Silent hill 2', 
      description: 'Después de recibir una carta de su difunta esposa, James se dirige al lugar donde habían compartido tantos recuerdos juntos, con la esperanza de verla una vez más: Silent Hill. Allí, junto al lago, se encuentra con una mujer siniestramente similar a ella...',
    },
    {
      idItem: 7,
      img: 'assets/imgs/EldenRing.jpg',
      name: 'Elden Ring',
      description: 'EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.',
    },
    {
      idItem: 8,
      img: 'assets/imgs/MHW.jpg',
      name: 'Monster Hunter: Wilds',
      description: 'La desenfrenada fuerza de la naturaleza es libre e implacable, con entornos que cambian drásticamente de un instante a otro. Esta es una historia sobre monstruos y humanos, y su lucha por sobrevivir en armonía en un mundo de dualidad.',
    },
  ];
  //configuracion del segundo carrusel

  carrusel2: CarruselConfig = {
    id_Carrosel: 2, //identificador unico
    layout: 'cards', //mostrara cards
    imgArray: [],
    autoPlaying: false, // no se movera de forma automatica
    items: this.itemsArray1, // elemetos que mostrara
    numberItems: 7, // mostrara 2 cards en cada elemento del carrusel
  } 
}
