import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-chart-demo',
  templateUrl: './line-chart-demo.component.html'
})
export class LineChartDemoComponent implements OnInit{

  usuarios:Usuario[];
  usuario:any={}
  texto:String;
  dataAvaliableBar:boolean = false;
  dataAvaliablePie:boolean = false;

  ngOnInit() {
   this.getTrabajadores();
   this.getMedia()
}
  constructor(private _usuarioService: UsuarioService,
  private router:Router){

  }

  getTrabajadores(){
    this._usuarioService.getTrabajadores<Usuario[]>()
    .subscribe((data: Usuario[]) => this.usuario = data,
      error => () => {
        console.log("Error");

      },
      ()=>{
        console.log("Exito");

        var lineChartData= new Array(this.usuario.length);
    for (let i = 0; i < this.usuario.length; i++) {
      
     
      lineChartData[i] = 
        { data: [this.usuario[i][0],
          this.usuario[i][0]+Math.floor((Math.random() * 10) + 1),
          this.usuario[i][0]+Math.floor((Math.random() * 10) + 1)
        ], label: this.usuario[i][1]};
        
      }
        this.lineChartData = lineChartData;
      
        this.dataAvaliableBar= true
      }
      
    );
}

getMedia(){
  this._usuarioService.getMedia<Usuario[]>()
  .subscribe((data: Usuario[]) => this.usuario = data,
    error => () => {
      console.log("Error");

    },
    ()=>{
      console.log("Exito");

      var _pieChartLabels= new Array(this.usuario.length);
      var _pieChartData= new Array(this.usuario.length);
  for (let i = 0; i < this.usuario.length; i++) {
    
      _pieChartLabels[i] = this.usuario[i][1]
      _pieChartData[i] = this.usuario[i][0]
    }
      
    this.pieChartLabels = _pieChartLabels;
    this.pieChartData = _pieChartData;
      this.dataAvaliablePie= true
    }
    
  );
}
  /*
  Si se utiliza el de Clave valor
  getMedia(){
  this._usuarioService.getMedia<Usuario[]>()
  .subscribe((data: Usuario[]) => this.usuario = data,
    error => () => {
      console.log("Error");

    },
    ()=>{
      console.log("Exito");

     

     var _pieChartLabels= new Array(this.usuario.length);
      var _pieChartData= new Array(this.usuario.length);
  for (let i = 0; i < this.usuario.length; i++) {
    
      _pieChartLabels[i] = this.usuario[i].puestotrabajo
      _pieChartData[i] = this.usuario[i].avg
    }
    
      
    this.pieChartLabels = _pieChartLabels;
    this.pieChartData = _pieChartData;
      this.dataAvaliablePie= true
      
    }
    
  );
}*/

//Bar
public lineChartLabels:string[] = ['2006', '2007','2008'];
public lineChartLegend = true;
public lineChartType = 'bar';
  

  public lineChartData
  public lineChartOptions: any = {
    responsive: true,
    /* legend: {
      display: false,
      
  },*/
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
             // max:100
              
          }
      }],
      xAxes:[]
    }

  };

  public lineChartColors:Array<any> = [
    { // Morado
      backgroundColor: 'rgba(86,16,156,0.4)',
      borderColor: 'rgba(86,16,156,0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(86,16,156,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(86,16,156,0.8)',
      pointHoverBorderColor: 'rgba(86,16,156,0.8)'
    },
    { // Verde
      backgroundColor: 'rgba(175,246,95,0.5)',
      borderColor: 'rgba(175,246,95,0.8)',
      pointBackgroundColor: 'rgba(175,246,95,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(175,246,95,1)',
      pointHoverBorderColor: 'rgba(175,246,95,1)'
    },
    { // Azul
      backgroundColor: 'rgba(77,240,243,0.5)',
      borderColor: 'rgba(77,240,243,0.8)',
      pointBackgroundColor: 'rgba(77,240,243,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(77,240,243,1)',
      pointHoverBorderColor: 'rgba(77,240,243,1)'
    },
    { // Maranja
      backgroundColor: 'rgba(255, 123, 15,0.5)',
      borderColor: 'rgba(255,123,15,0.8)',
      pointBackgroundColor: 'rgba(255,123,15,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(255,123,15,1)',
      pointHoverBorderColor: 'rgba(255,123,15,1)'
    }
    
  ];

 // Pie
  public pieChartType:string = 'pie';
  public pieChartLabels:string[] ;
  public pieChartData:number[];
  

  // events
   chartClicked(e: any): void {
    console.log(e);
  }

   chartHovered(e: any): void {
    console.log(e);
  }

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  
  volver(evento){
    this.router.navigate(["/contactos"]);
  }
  
  /*
    public doughnutChartLabels:string[] = ['','Nota'];
  nota:number = 7.5;
  sobre_diez:number =(10-this.nota)
  public doughnutChartData:number[] = [this.sobre_diez, this.nota];
  public doughnutChartType:string = 'doughnut';
  

    private doughnutChartColors: any[] = [{ backgroundColor: ["#FFFFFF", "#00fc01"] }]

*/




}
