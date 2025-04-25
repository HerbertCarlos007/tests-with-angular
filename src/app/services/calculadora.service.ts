import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor(private loggerService: LoggerService) {}

  calcular(num1: number, num2: number, operacao: string) {
    switch (operacao) {
      case 'soma':
        return num1 + num2

      case 'subtracao':
        return num1 - num2
        
      case 'divisao':
        return num1 / num2
        
      case 'multiplicacao':
        return num1 * num2
        
      default:
        this.loggerService.log('Operacao invalida')
        return null
    }
  }
}
