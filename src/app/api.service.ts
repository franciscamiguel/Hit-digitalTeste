import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://hitdigital.com.br/test.php';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.apiUrl);
  }
}