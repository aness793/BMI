import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalculateService } from '../services/calculate.service';


@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  message!:string
  height!:number
  weight!:number
  bmi!:number
  red:boolean=false
  yellow:boolean=false
  green:boolean=false
  constructor(private router:Router,private calcualte:CalculateService){
   }
   calculate(w:any , h:any){
    this.weight = parseFloat(w)
    this.height = parseFloat(h)
   if(this.weight>0 && this.height>0){
    this.bmi = this.calcualte.calculateBMS(this.weight,this.height)
    if( this.bmi>25 && this.bmi<30){
      this.yellow=true
      this.red=false
      this.green=false
      this.message = 'overweight'
    }
    if( this.bmi<18.5){
      this.yellow=true
      this.red=false
      this.green=false
      this.message  ='underweight'
    }
    else if(this.bmi>18.5 && this.bmi<25){
      this.yellow=false
      this.red=false
      this.green=true
      this.message  ='perfect weight'
    }
    else if(this.bmi>=30){
      this.yellow=false
      this.red=true
      this.green=false
      this.message  ='Obese'

    }

   }
   else {
    this.bmi = 0
   }
   console.log(this.bmi)
   console.log(this.yellow , this.red , this.green)
  }
  
}
