import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private http = inject(HttpClient);

  getRandomCat() {
    return this.http.get(`${environment.catApiUrl}/images/search`, {
      headers: {
        'x-api-key': environment.catApiKey,
      },
    });
  }

}
