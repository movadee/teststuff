import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formsStructureUrl = 'https://gist.githubusercontent.com/movadee/dde354b87195885f866dd50ea8f2c400/raw/forms-structure.json';

  constructor(private http: HttpClient) { }

  getFormStructure() {
    return this.http.get(this.formsStructureUrl);
  }
}

