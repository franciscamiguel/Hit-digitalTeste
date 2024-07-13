import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [],
  templateUrl: './introducao.component.html',
  styleUrl: './introducao.component.css'
})
export class IntroducaoComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarContato() {
    this.router.navigate(['/contato']);
  }

}
