import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  evidenziato = false;
  ricette: Recipe[];
  titolo= 'Ecco il titolo della modale';
  @ViewChild('modalRegistrazione', {static:false}) modale: ElementRef;

  nome: string;
  email: string;
  constructor(private userService: UserService, private modalService: NgbModal){}

  ngOnInit(): void {
    this.userService.datiUtente.subscribe(
      (res: any) => {
        this.nome = res.nome;
        this.email = res.email;

        this.open(this.modale);
      }
    )
  }

  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }

  open(content: any, titoletto?: string){
    let titolo = titoletto;

    this.modalService.open(content, {ariaLabelledBy: 'modal registration', size: 'lg', centered:true}).result.then(
      (res) => {
        console.log('azione da eseguire, ecco il titolo arrivato ', titolo)
      }).catch((res) => {
        console.log('nessuna azione da eseguire')
      })
  }

}


