import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  public mostrar = false;
  public frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  };
  public lenguajes: string[] = ['Angular', 'React', 'NodeJs', 'PHP'];
}
