import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{
  ricette: Recipe[];
  titoloRicevuto: string;
  difficoltaRicevuta: number;
  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  riceviMessaggio(e: any){
    console.log(JSON.parse(e));
    this.titoloRicevuto == e.titolo ? this.titoloRicevuto = '' : this.titoloRicevuto = e.titolo;
    this.difficoltaRicevuta = e.diff
  }
}
