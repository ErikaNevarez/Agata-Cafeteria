import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  footerDate: number=new Date ().getFullYear (); 
  prof1: any = {
    name: "José Pérez",
    position: "Online Teacher",
    course: "Python",
    image: "/Jose-Perez.jpg",
    descripcion:
      "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.",
    curse_image: "/Python-Symbol_0.png",
  };
  prof2: any = {
    name: "Andrea Rodríguez",
    position: "Fullstack Developer",
    course: "Angular",
    image: "/Andrea-Rodriguez.jpg",
    descripcion:
      "Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.",
    curse_image: "/Angular_gradient.png",
  };
  prof3: any = {
    name: "Pedro Hernández",
    position: "Desarrollador Backend",
    course: "Bases de Datos",
    image: "/Pedro-Hernandez.jpg",
    descripcion:
      "El backend es la parte invisible pero esencial de un sitio, encargada de manejar la lógica y el procesamiento de datos necesarios para que todo funcione de manera correcta y segura.El backend se ocupa de tareas como almacenar y recuperar datos de una base de datos, procesar formularios, autenticar usuarios y gestionar la seguridad del sitio. Es responsable de toda la “magia” que sucede detrás de la interfaz visible.",
    curse_image: "database-icon",
  };
  prof4: any = {
    name: "Nancy Cuellar",
    position: "UX Designer",
    course: "Diseño UX",
    image: "/Nancy-Cuellar.jpg",
    descripcion:
      "El diseño de Experiencia de Usuario (UX) es el proceso de crear productos, sistemas o servicios que proporcionen experiencias significativas y relevantes a los usuarios. Involucra todo el proceso de adquisición e integración del producto, lo que incluye aspectos de marca, diseño, usabilidad y funcionalidad. Una gran parte del diseño UX es hacer que el producto final resulte funcional para proporcionar una experiencia positiva, eficiente y satisfactoria para el usuario.",
    curse_image: "diseno-ux",
  };
  prof5: any = {
    name: "Victor Ambros",
    position: "Biólogo",
    course: "Investigación Genética",
    image: "/victorambros.jpg",
    descripcion:
      "Nuestro genoma puede compararse con un manual de instrucciones para todas las células de nuestro cuerpo. Cada célula contiene el mismo conjunto de instrucciones. Sin embargo, los distintos tipos de células tienen características muy distintas. Estas diferencias surgen de la regulación genética, que permite que cada célula seleccione únicamente las instrucciones pertinentes.",
    curse_image: "/invgenetica.jpg",
  };
  prof6: any = {
    name: "Geoffrey Hinton",
    position: "Científico Computacional",
    course: "Machine Learning",
    image: "/hinton.jpg",
    descripcion:
      "La inteligencia artificial revolucionará el mercado laboral. En lugar de complementar a los humanos, podría reemplazarlos en innumerables oficios en los que se desempeñan tareas rutinarias. Sin embargo, el verdadero temor es que las tecnologías en el futuro amenacen a la humanidad y se desarrollen armas verdaderamente autónomas. Los sistemas de inteligencia artificial, a menudo aprenden un comportamiento inesperado debido a la gran cantidad de datos que analizan.",
    curse_image: "/machine.png",
  };
  prof7: any = {
    name: "Andrea Ghez",
    position: "Astrónoma",
    course: "Astrofísica Aplicada",
    image: "/andreaghez.jpg",
    descripcion:
      "Un agujero negro es un objeto compacto supermasivo con una fuerza gravitatoria tan grande que nada, ni siquiera la luz, puede escapar de él. Dado que nada, ni siquiera la luz, puede escapar de los agujeros negros, estos solo pueden observarse mediante la radiación y el movimiento de los objetos cercanos.",
    curse_image: "/astrofis.jpg",
  };
  prof8: any = {
    name: "Anne L'Huillier",
    position: "Electrofísica",
    course: "Ciencias Físicas",
    image: "/anne.jpg",
    descripcion:
      "Centrada en la generación de armónicos de alto orden en los gases y sus aplicaciones. En el dominio del tiempo, estos armónicos corresponden a una serie de pulsos de luz extremadamente cortos, en el rango espectral ultravioleta extremo y con una duración de unas pocas decenas o centenas de attosegundos.",
    curse_image: "/electro.png",
  };

}
