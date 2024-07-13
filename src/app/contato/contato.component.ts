import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})

export class ContatoComponent {
  
  data: any;

  constructor(private router: Router, private apiService: ApiService) { }
  
  
  navegarIntroducao() {
    this.router.navigate(['/introducao']);
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe(response=> {
      //console.log(response.data);
      this.data = response.data as ResultadoAPI;
      console.log(this.data);
    });
  }

}

export interface ResultadoAPI {
  title: number;
  text: number;
}

