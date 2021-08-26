import { Injectable, Output , EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesEmitService {
  @Output( )transmitter:EventEmitter<any> = new EventEmitter;
  constructor() { }
}
