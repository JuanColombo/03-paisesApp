import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string='';
  hayError:boolean = false;
  paises : Country[] = [];

  buscar(termino:string){

    this.hayError=false;
    this.termino =termino;
    
    this.paisService.buscarCapital(this.termino).subscribe(paises=>{
        this.paises = paises;
      }, (err =>{
          this.hayError=true
          this.paises = []})
        );
  }
  
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
