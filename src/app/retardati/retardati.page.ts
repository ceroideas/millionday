import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-retardati',
  templateUrl: './retardati.page.html',
  styleUrls: ['./retardati.page.scss'],
})
export class RetardatiPage implements OnInit {

  usuario: string = localStorage.getItem('usuario');
  // data1: any[] = [];
  // data2: any[] = [];
  numeros: any[] = [];
  // frecuencia: any[] = [];
  // numeros2: any[] = [];
  // frecuencia2: any[] = [];
  orden = 50;
  order = "ORDINA PER NUMERO";

  constructor(private service: ComunicacionService) { }

  ngOnInit() {

  	this.service.changeData(this.usuario);

    if (localStorage.getItem('infrecuentes') && JSON.parse(localStorage.getItem('infrecuentes')).length > 0) {

      // this.data1 = JSON.parse(localStorage.getItem('infrecuentes'));
      // this.data2 = JSON.parse(localStorage.getItem('infrecuencia'));
      // this.numeros = [this.data1[0], this.data1[1], this.data1[2], this.data1[3], this.data1[4]];
      // this.frecuencia = [this.data2[0], this.data2[1], this.data2[2], this.data2[3], this.data2[4]];
      // this.numeros2 = [this.data1[5], this.data1[6], this.data1[7], this.data1[8], this.data1[9]];
      // this.frecuencia2 = [this.data2[5], this.data2[6], this.data2[7], this.data2[8], this.data2[9]];

      this.insertar();
      
    }

  }

  insertar(){

    let ultimos = JSON.parse(localStorage.getItem('e200n'));
    let frecuencia = [];

    for (let i = 1; i <= 55; i++) {

      let a = 0;
      let b = 0;

      for (let j in ultimos) {
        if (ultimos[j].filter(x=>x==i).length == 0) {
          a++;
        }else{
          break;
        }
        // else{
        //   if (a > b) {
        //     b = a;
        //   }
        //   a = 0;
        // }

      }

      frecuencia.push({numero:i,frecuencia:a});
    }

    let limit = 55;

    for (var h = 0; h < limit; h++) {
      if (frecuencia[h] !== undefined) {

        this.numeros.push({num:frecuencia[h].numero,freq:frecuencia[h].frecuencia || 0})

      }
    }

    // for (h = limit; h < limit*2; h++) {
    //   if (frecuencia[h] !== undefined) {
    //     this.numeros2.push({num:frecuencia[h].numero,freq:frecuencia[h].frecuencia || 0})
    //   }
    // }


      // this.data1 = JSON.parse(localStorage.getItem('frecuentes'));
      // this.data2 = JSON.parse(localStorage.getItem('frecuencia'));

      // this.numeros = [
      //   {num:this.data1[0],freq:this.data2[0]},
      //   {num:this.data1[1],freq:this.data2[1]},
      //   {num:this.data1[2],freq:this.data2[2]},
      //   {num:this.data1[3],freq:this.data2[3]},
      //   {num:this.data1[4],freq:this.data2[4]}];

      // this.numeros2 = [
      //   {num:this.data1[5],freq:this.data2[5]},
      //   {num:this.data1[6],freq:this.data2[6]},
      //   {num:this.data1[7],freq:this.data2[7]},
      //   {num:this.data1[8],freq:this.data2[8]},
      //   {num:this.data1[9],freq:this.data2[9]}];

      // this.data1 = JSON.parse(localStorage.getItem('infrecuentes'));
      // this.data2 = JSON.parse(localStorage.getItem('infrecuencia'));

      // this.numeros = [
      //   {num:this.data1[0],freq:this.data2[0]},
      //   {num:this.data1[1],freq:this.data2[1]},
      //   {num:this.data1[2],freq:this.data2[2]},
      //   {num:this.data1[3],freq:this.data2[3]},
      //   {num:this.data1[4],freq:this.data2[4]}];

      // this.numeros2 = [
      //   {num:this.data1[5],freq:this.data2[5]},
      //   {num:this.data1[6],freq:this.data2[6]},
      //   {num:this.data1[7],freq:this.data2[7]},
      //   {num:this.data1[8],freq:this.data2[8]},
      //   {num:this.data1[9],freq:this.data2[9]}];
  }

  /*ordenar(){
    if (this.order == "ORDINA PER PI?? RITARDATARIO") {
      this.numeros = this.numeros.sort((a,b)=> a.num - b.num);
      // this.numeros2 = this.numeros2.sort((a,b)=> a.num - b.num);

      this.order = "ORDINA PER NUMERO";
    }else{
      this.numeros = this.numeros.sort((a,b)=> b.freq - a.freq);
      // this.numeros2 = this.numeros2.sort((a,b)=> a.freq - b.freq);

      this.order = "ORDINA PER PI?? RITARDATARIO";
    }
    

  }*/

  abrir(){

    if (document.getElementById("estracciones2").style.display == 'none') {

      document.getElementById("estracciones2").style.display = "block";

    }else{

      document.getElementById("estracciones2").style.display = 'none';

    }
  }

  cerrar(){

    document.getElementById("estracciones2").style.display = "none";

  }

  ordenar(valor){

     if (valor == 50) {

        this.orden = 50;
        this.numeros = this.numeros.sort((a,b)=> a.num - b.num);
        this.order = "ORDINA PER NUMERO";

        this.cerrar();

     }else{

       this.orden = 100;
       this.numeros = this.numeros.sort((a,b)=> b.freq - a.freq);
       this.order = "ORDINA PER PI?? RITARDATARIO";

       this.cerrar();

     }

  }

}