import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userdata';
  

  constructor(public dataService: DataService) {}


  num:number=0;
  array1=this.dataService.array;
  
  sum() {
    this.num+=1;

  }

  sub(itms){
    const index = this.dataService.array.indexOf(itms);
    this.dataService.array.splice(index,1);
    this.num-=1;
  }

}
