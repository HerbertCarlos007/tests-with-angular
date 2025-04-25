import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';

describe('TodosService', () => {
  let todosService: TodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        provideHttpClient()
      ]
    });
    todosService = TestBed.inject(TodosService);
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
  });

  it('Deve retornar o to-do por id', () => {
   todosService.getById(12).subscribe((todo) => {
    expect(todo).toBeTruthy()
    expect(todo.id).toEqual(12)
   })
  });

});
