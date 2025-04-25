import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tests-unitarios';

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((response) => {
      console.log(response)
    })

    this.todoService.getById(1).subscribe((response) => {
      console.log(response)
    })
  }
}
