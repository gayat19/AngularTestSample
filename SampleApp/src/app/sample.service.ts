import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }
  check():string{
    return "Welcome";
  }
}
