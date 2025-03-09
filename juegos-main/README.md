# Practica: Por definir estilos

## Proposito:

Conocer el decorador @Input(), conocer sus aplicaciones y como este es utilizado para pasar atributos desde un componente padre a un componente hijo

## Requisitos Previos

- Conocimientos básicos de HTML, CSS y TypeScript.
- Familiaridad con Angular CLI.
- Node.js y Angular CLI instalados.
- Bootstrap

## Estructura del Proyecto

### Estructura de archivos y carpetas

```
public/
    /assets
src/
  app/
    /components/
                /footer
                /header
                /carrusel
                /card
    /models/
            items.model.ts
            CarruselConfig.model.ts
    /pages/
            /home/
    app.component.css
    app.component.html
    app.component.ts
    app.config.ts
    app.routes.ts
  index.html
  main.ts
  syles.css
```

### Descripcion de cada componente

- **app.component.ts**: este se utiliza como raiz o componente padre para alojar los demas componentes
- **app.footer**: se utiliza para mostrar la informacion del pide de pagina
- **app.header**: se utiliza para mostrar el nav de la pagina
- **app.home**: pagima principal donde se despliega toda la informacion. Este componente es padre de Carrusel y por medio de la directiva @Input() le envia la configuaracion necesaria para su despliegue
- **app.carrusel**: este componente es un carrusel el cual cuanta con varias formas de despliegue, permitiendo su reutilizacion en vatiso escenarios. estas son definidad por medio de una configuracion la cual es enviada a el por medio del decorador @Input(). a su vez este componente puede ser padre del componente card
- **app.card**: este componente puede o no ser mostrado por el componente carrusel (aunque tambie se podria mostrar sin la necesidad de este), cuenta con un atributo item el cual es recivido desde el compoenete padre gracias al decorador @Input()


## Puntos Clave
En esta práctica, se trabajan los siguientes conceptos clave relacionados con el **decorador @Input()** en Angular:
- **Decorador Input (`@Input() varible:type`)**:  
    El decorador @Input() se utiliza para definir una propiedad en un componente hijo que puede recibir valores desde un componente padre. Esto permite que los datos fluyan de manera unidireccional (del padre al hijo).


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# practica-angular-13
