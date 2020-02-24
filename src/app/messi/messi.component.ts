import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Messi } from '../models/messi';

@Component({
  selector: 'messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;
  public parrafo: string;
  public messis: Array<Messi>;

  constructor() {
    this.titulo = "Messi";
    this.parrafo = "Lionel Andrés Messi Cuccittini, conocido como Leo Messi, ​ es un futbolista argentino que juega como delantero o centrocampista.​​ Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección argentina, equipos de los que es capitán.";
    this.messis = [
      new Messi('Lionel Messi', 32, 'Argentina', 'Barcelona', true),
      new Messi('Cristiano Ronaldo', 35, 'Portugal', 'Juventus', true),
      new Messi('Ronaldinho', 39, 'Brasil', 'Fluminense', false)
    ];
  }

  ngOnInit(){
  console.log(this.messis);
  }

  ngDoCheck(){
    //console.log("Docheck ejecutado");
  }

  ngOnDestroy(){
    //console.log("OnDestroy ejecutado");
  }

  cambiarTitulo(){
    this.titulo = "Jugadores";
  }

}
