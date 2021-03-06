import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-mnumeros',
  templateUrl: './mnumeros.page.html',
  styleUrls: ['./mnumeros.page.scss'],
})
export class MnumerosPage implements OnInit {

  numeros: any = [1, 8, 15, 22, 29, 36, 43, 50];
  numeros1: any = [1, 8, 15, 22, 29, 36, 43, 50];
  numeros2: any = [2, 9, 16, 23, 30, 37, 44, 51];
  numeros3: any = [3, 10, 17, 24, 31, 38, 45, 52];
  numeros4: any = [4, 11, 18, 25, 32, 39, 46, 53];
  numeros5: any = [5, 12, 19, 26, 33, 40, 47, 54];
  numeros6: any = [6, 13, 20, 27, 34, 41, 48, 55];
  numeros7: any = [7, 14, 21, 28, 35, 42, 49];
  combinacion: any = [];
  final: any = [];
  colores: string;
  usuario: string = localStorage.getItem('usuario');

  timeout;

  constructor(private service: ComunicacionService) {
    this.colores = null;
  }

  ngOnInit() {

    this.service.changeData(this.usuario);

  }

  seleccionar (event, numero){

    let seleccion = numero;
    let valor = 'numero' + numero.toString();

    if (event.target.checked && this.combinacion.length < 5) {


      this.combinacion.push(seleccion);

    }else{

      event.target.checked = false;
      const index = this.combinacion.indexOf(seleccion);

      if (index > -1) {

        this.combinacion.splice(index, 1);

      }

    }

    //console.log(this.combinacion);
    
  }

  seleccionar2 (event, numero){

    let seleccion = numero;
    let valor = 'numero' + numero.toString();

    if (event.target.checked && this.combinacion.length < 5) {


      this.combinacion.push(seleccion);

    }else{

      event.target.checked = false;
      const index = this.combinacion.indexOf(seleccion);

      if (index > -1) {

        this.combinacion.splice(index, 1);

      }

    }

    //console.log(this.combinacion);

  }

  validar(){

    clearTimeout(this.timeout);
    
    this.timeout = setTimeout(()=>{
      this.colores = null;
    },5000)

    // console.log(this.combinacion);
    const combinazione = this.combinacion.sort((a, b) => a - b);
    const semaforo = document.getElementById("rvalidacion");
    const colores = ['green', 'yellow', 'red', 'red2'];
    const primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
    let nprimos = 0;


    // impares


    let seguidos = 0;
    let coincidencias = [];
    let u200 = JSON.parse(localStorage.getItem('e200n'));

    let combinacion = [];
    for (let h in combinazione) {
      combinacion.push(combinazione[h].toString());
    }

    for (let h in u200) {
      if (JSON.stringify(combinacion) == JSON.stringify(u200[h])) {
        return this.colores = colores[3];
      }
    }

    for (let i = 0; i < combinazione.length; i++) {

      if (combinazione[i+1] !== undefined) {

        if (combinazione[i]+1 == combinazione[i+1]) {
          seguidos++;
        }
      }
    }

    //console.log(seguidos);


    for (let i = 0; i <= combinazione.length; i++) {

      let numero = combinazione[i];

      for (let x = 0; x < primos.length; x++) {

        let primo = primos[x];

        if (numero == primo) {
          nprimos++;
        }
      }
    }

    // console.log(nprimos);

    if (nprimos == 5 || seguidos == 3) {
      return this.colores = colores[2];
    }

    if (nprimos == 4 || seguidos == 2) {
      return this.colores = colores[1];
    }

    // pares

    let comp = 0;

    for (var i = 0; i < combinazione.length; i++) {
      if (combinazione[i]%2 == 0) {
        comp++;
      }
    }

    if (comp==5) {
      console.log('TODOS SON PARES, Naranja');
      return this.colores = colores[1];
    }

    comp = 0;

    for (var i = 0; i < combinazione.length; i++) {
      if (combinazione[i]%2 == 1) {
        comp++;
      }
    }

    if (comp==5) {
      console.log('TODOS SON IMPARES, Naranja');
      return this.colores = colores[1];
    }

    // regla 1
    let a = 0;
    
    for (let h = 1; h <= 13; h++) {
      
      a = 0;
      
      for (let i = 0; i < combinazione.length; i++) {

        if (combinazione[i+1] !== undefined) {

          if (combinazione[i]+h == combinazione[i + 1]) {

            a++;

          }
        }
      }

      //console.log(h, a);
      
      if (a >= 3) {
        return this.colores = colores[2];
      }else if(a >= 2){
        if (seguidos > 0) {
          return this.colores = colores[2];
        }
      }
      
    }

    return this.colores = colores[0];

  }

}
