import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() childProperty:any;
  @Output() decr = new EventEmitter();


  sub(itms){
    this.decr.emit(itms);
  }

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
