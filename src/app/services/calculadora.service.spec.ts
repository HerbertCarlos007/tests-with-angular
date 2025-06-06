import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import { LoggerService } from './logger.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
    TestBed.configureTestingModule({
      providers: [CalculadoraService, 
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('Deve somar corretamente dois numeros', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, "soma")
    expect(result).toBe(13, 'O resultado deve ser igual a 13')
  });

  it('Deve subtrair corretamente dois numeros', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(10, 8, "subtracao")
    expect(result).toBe(2, 'O resultado deve ser igual a 2')
  });

  it('Deve dividir corretamente dois numeros', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(10, 2, "divisao")
    expect(result).toBe(5, 'O resultado deve ser igual a 5')
  });

  it('Deve multiplicar corretamente dois numeros', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(10, 2, "multiplicacao")
    expect(result).toBe(20, 'O resultado deve ser igual a 20')
  });

  it('Quando a operação for invalida', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(10, 2, "eeee")
    expect(result).toBeNull()
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  });
});
