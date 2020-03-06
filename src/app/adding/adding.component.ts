import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {


  @Output() incr =new EventEmitter();
  data= new EventEmitter();

  num:number=0;
  
  
  

  firstName:string;
  lastName:string;

  

  onClick(firstName,lastName){
    
    if (firstName!='' && lastName!='') {
      this.dataService.array.push(firstName +" " + lastName);
      this.incr.emit();
    }
    
  }
  constructor(public dataService: DataService) {}


  ngOnInit(): void {}
}

