import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  ricetta: Recipe;
  percorsoDifficolta = '../../../../assets/images/difficolta-';

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){}

    ngOnInit(): void {
      this.onGetRecipe();
    }


    // primo metodo di recupero parametri da URL tramite snapshot
    onGetRecipe(): void {
      //recuper id
      const id = this.activatedRoute.snapshot.paramMap.get('_id');

      // converto in numero
      const idN = Number(id);

      this.recipeService.getRecipe(id).subscribe({
        next: (res) => {
          this.ricetta = res;
          console.log('ecco la ricetta trovata ' + res.title);
        },
        error: (e) => {
          console.log(e);
        }
      })
    }

    //secondo metodo alternativo tramite params
    onGetRecipe2(): void {
      //recupero id
      this.activatedRoute.params.subscribe((urlParams) => {
        const id = urlParams['_id'];

        // converto in numero
       const idNumerico = Number(id);

        this.recipeService.getRecipe(id).subscribe(res => this.ricetta = res);
      })
    }

    O

}
