import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit{
 recipes: Recipe[];
 @Output() messaggio = new EventEmitter();
 @Input() pag;
 page = 1;
 ricettePerPagina = 4;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.recipes = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


 inviaTitolo(titolo: string, diff: number, pubblicato: boolean){

  const valoriDaInviare = {
    titolo: titolo,
    diff: diff,
    pubblicato: pubblicato
  }

  this.messaggio.emit(valoriDaInviare);
 }

 accorciaDescrizione(descrizione):number {
  const lunghezzaMassima = 198;
  if(descrizione.length <= lunghezzaMassima){
    return lunghezzaMassima;
  } else {
    let ultimaPosizioneSpazio = descrizione.indexOf(' ', lunghezzaMassima);
    return ultimaPosizioneSpazio;
  }
 }

 paginate(event){
  event.page = event.page + 1;
  this.page = event.page;
 }
}
