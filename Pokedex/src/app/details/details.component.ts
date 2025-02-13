import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [MatCard, MatCardTitle, MatCardHeader, MatCardContent, TitleCasePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    @Input() pokemon!: Pokemon;
}
