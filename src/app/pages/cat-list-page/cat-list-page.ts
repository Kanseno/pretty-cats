import { Component, inject, signal } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { JsonPipe } from '@angular/common';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-cat-list-page',
  imports: [JsonPipe],
  templateUrl: './cat-list-page.html',
  styleUrl: './cat-list-page.scss',
})
export class CatListPage {

  private catService = inject(CatService);
  protected cat = signal<any | null>(null);

  constructor() {
    console.log('CatListPage constructor', environment.catApiKey);
    this.catService.getRandomCat().pipe(take(1)).subscribe((cat) => {
      this.cat.set(cat);
    });
  }

  protected getRandomCat() {
    this.catService.getRandomCat().pipe(take(1)).subscribe((cat) => {
      this.cat.set(cat);
    });
  }
}
