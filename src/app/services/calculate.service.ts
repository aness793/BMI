import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  height!:number
weight!:number
bmi:number =0
res:string=''
  constructor( private router:Router) { }
calculateBMS(w:number,h:number):number{
  this.res =(w/(h**2)).toFixed(2)
return parseFloat(this.res)
}
}
