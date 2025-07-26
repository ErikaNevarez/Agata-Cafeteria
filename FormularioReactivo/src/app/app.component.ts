import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; 


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularioReactivo';
  userForm!:FormGroup; 

  constructor(public formBuilder : FormBuilder ){
  
    this.userForm=this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3) ] ],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    }); 
  }

    onSubmit():void{
      if(this.userForm.valid){
        alert("Formulario enviado");
      }
    }



}
