import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cibando';

  nomeFoto = 'foto del mare con le onde';
  label = 'mare toscana';
  urlFoto = 'https://cdn.skuola.net/news_foto/2017/descrizione-mare.jpg';

  images = [
    { id: 1, label: 'Spaghetti al sugo' },
    { id: 2, label: 'Tagliata di manzo' },
    { id: 3, label: 'Tiramisù' },
  ];

  percorsoFoto = '../assets/images/imageBg-';

  scriviLog() {
    console.log('hai cliccato col mouse sopra la foto');
  }

  allievi = [
    { nome: 'danilo', citta: 'roma' },
    { nome: 'marco', citta: 'roma' },
    { nome: 'alessia', citta: 'napoli' },
    { nome: 'mario', citta: 'milano' },
  ];
}