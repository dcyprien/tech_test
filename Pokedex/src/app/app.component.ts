import { Component } from '@angular/core';
import { HeadersearchComponent } from "./headersearch/headersearch.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Pokemon } from '../models/pokemon.model';
import { ImageComponent } from "./image/image.component";
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  imports: [HeadersearchComponent, MatSlideToggleModule, ImageComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';
  pokemon!: Pokemon;

  getPokemon(event: Pokemon):void{
    this.pokemon = event;
  }
}
