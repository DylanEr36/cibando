import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
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
 id: string;

  constructor(private recipeService: RecipeService, private modalService: NgbModal, private router: Router){}

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

 open(content: any, id: any){
  this.id = id

  this.modalService.open(content, {ariaLabelledBy: 'modal registration', size: 'lg', centered:true}).result.then(
    (res) => {
      console.log(this.id)
    }).catch((res) => {
      console.log('nessuna azione da eseguire')
    })
  }

  eliminaRicetta(id: string){
      //recuper id
      console.log(id)

      // converto in numero
      // const idN = Number(id);

      this.recipeService.deleteRecipe(id).subscribe({
        next: (res) => {
          console.log('ricetta eliminata!')
          this.router.navigate(['home']);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

}
