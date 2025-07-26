import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  template: `
    <div>
      <p>Soy el componente hijo</p>
      <button (click)="notificarPadre()">dar click</button>
    </div>
  `,
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

@Output() button:EventEmitter<string> = new EventEmitter<string>(); 

notificarPadre():void{
  //emitir el evento con un mensaje hacia mi padre
  this.button.emit("Le dieron click al botón")
}


}
