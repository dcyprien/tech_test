import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequesterService } from '../services/requester-service.service';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@Component({
  selector: 'app-headersearch',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormField, MatInputModule],
  templateUrl: './headersearch.component.html',
  styleUrl: './headersearch.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
        MatFormFieldAppearance: 'outline'
      }
    }
  ]
})
export class HeadersearchComponent {
    submitForm!: FormGroup;
    requesterService!: RequesterService
    @Output() pokemon = new EventEmitter<Pokemon>();

    constructor(private formBuild: FormBuilder){
        this.submitForm = this.formBuild.group({
            pokemon: '',
        })
        this.requesterService = new RequesterService(new HttpClient(new HttpXhrBackend({
            build: () => new XMLHttpRequest()
        })))
    }

    async onSubmit(): Promise<void>{
        this.pokemon.emit(await this.requesterService.requestPokemon(this.submitForm.value.pokemon));
    }
}
