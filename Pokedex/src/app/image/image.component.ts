import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-image',
  imports: [MatCard, MatCardTitle, MatCardHeader, TitleCasePipe],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
    @Input() urlFront!: string;
    @Input() urlBack!: string;
    @Input() name!: string;
    front: boolean = true

    onClick(event: any){
        if (this.front){
            event.srcElement.src = this.urlBack;
            this.front = false;
        }
        else{
            event.srcElement.src = this.urlFront;
            this.front = true;
        }
    }
}
