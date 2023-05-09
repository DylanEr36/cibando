import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  evidenziato = false;

  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }
}





