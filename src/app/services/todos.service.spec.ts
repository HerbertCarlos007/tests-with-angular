import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment.development';
import { TODO_STRING, TODOS_STRING } from '../../../server/db-data';

describe('TodosService', () => {
  let todosService: TodosService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    todosService = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('Deve retornar todos os to-dos', () => {
    todosService.getAll().subscribe((todos) => {
      expect(todos).toBeTruthy('Nenhum to-do foi retornado')
      expect(todos.length).toEqual(200, 'A quantidade de to-dos não é 200')

      const todo = todos.find(todo => todo.id == 15)
      expect(todo?.title).toEqual('ab voluptatum amet voluptas')
    })

    const req = httpTestingController.expectOne(environment.apiUrl + 'todos')
    expect(req.request.method).toEqual('GET')
    req.flush(JSON.parse(TODOS_STRING))
  });

  it('Deve retornar o to-do por id', () => {
   todosService.getById(12).subscribe((todo) => {
    expect(todo).toBeTruthy()
    expect(todo.id).toEqual(12)
   })

   const req = httpTestingController.expectOne(environment.apiUrl + 'todos/12')
    expect(req.request.method).toEqual('GET')
    req.flush(JSON.parse(TODO_STRING))
  });
  
});
