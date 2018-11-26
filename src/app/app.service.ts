import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  formsStructureUrl = 'https://gist.githubusercontent.com/movadee/dde354b87195885f866dd50ea8f2c400/raw/forms-structure.json';

  getFormStructure() {
    return this.http.get(this.formsStructureUrl);
  }
}

