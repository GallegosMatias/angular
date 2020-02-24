import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;
  public parrafo: string;

  constructor() {
    this.titulo = "Messi";
    this.parrafo = "Lionel Andrés Messi Cuccittini, conocido como Leo Messi, ​ es un futbolista argentino que juega como delantero o centrocampista.​​ Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección argentina, equipos de los que es capitán."
  }

  ngOnInit(): void {
  console.log("OnInit ejecutado");
  }

  ngDoCheck(){
    console.log("Docheck ejecutado");
  }

  ngOnDestroy(){
    console.log("OnDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Nuevo titulo de messi";
  }

}
