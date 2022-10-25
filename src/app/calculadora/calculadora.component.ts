import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banda1 = "";
  banda2 = "";
  banda3 = "";
  tolerancia = "";
  max = 0;
  min = 0;
  valor = 0;

  color1 = "";
  color2 = "";
  color3 = "";
  color4 = "";

  porcentaje(): void {

    switch(this.banda1){
      case "0" :
        this.color1 = "black";
      break;
      case "10" :
        this.color1 = "brown";
      break;
      case "20" :
          this.color1 = "red";
          break;
      case "30" :
         this.color1 = "orange";
      break;
      case "40" :
          this.color1 = "yellow";
      break;
      case "50" :
        this.color1 = "green";
      break;
      case "60" :
        this.color1 = "blue";
      break;
      case "70" :
          this.color1 = "violet";
          break;
      case "80" :
         this.color1 = "gray";
      break;
      case "90" :
          this.color1 = "";
      break;
    }

    switch(this.banda2){
      case "0" :
        this.color2 = "black";
      break;
      case "1" :
        this.color2 = "brown";
      break;
      case "2" :
          this.color2 = "red";
          break;
      case "3" :
         this.color2 = "orange";
      break;
      case "4" :
          this.color2 = "yellow";
      break;
      case "5" :
        this.color2 = "green";
      break;
      case "6" :
        this.color2 = "blue";
      break;
      case "7" :
          this.color2 = "violet";
          break;
      case "8" :
         this.color2 = "gray";
      break;
      case "9" :
          this.color2 = "";
      break;
    }

    switch(this.banda3){
      case "1" :
        this.color3 = "black";
      break;
      case "10" :
        this.color3 = "brown";
      break;
      case "100" :
          this.color3 = "red";
          break;
      case "1000" :
         this.color3 = "orange";
      break;
      case "10000" :
          this.color3 = "yellow";
      break;
      case "100000" :
        this.color3 = "green";
      break;
      case "1000000" :
        this.color3 = "blue";
      break;
      case "10000000" :
          this.color3 = "violet";
          break;
      case "100000000" :
         this.color3 = "gray";
      break;
      case "1000000000" :
          this.color3 = "";
      break;
    }

    switch(this.tolerancia){
      case "5%" :
        this.color4 = "gold";
      break;
      case "10%" :
        this.color4 = "silver";
      break;
    }

    if (this.tolerancia == "5%"){
      this.valor = (parseInt(this.banda1) + parseInt(this.banda2)) * parseInt(this.banda3);
      this.max = this.valor * 1.05;
      this.min = this.valor * 0.95;
    }
    else if(this.tolerancia == "10%"){
      this.valor = (parseInt(this.banda1) + parseInt(this.banda2)) * parseInt(this.banda3);
      this.max = this.valor * 1.10;
      this.min = this.valor * 0.90; 
    }
  }
}