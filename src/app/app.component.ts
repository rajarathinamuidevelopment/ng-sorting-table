import { Component,Pipe, PipeTransform } from '@angular/core';

import { DataService } from './service/data.service';
import { OrderByPipe } from './pipe/order-by.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'userId';
  direction: number;
  constructor(private dataService:DataService){
    
  }
  ngOnInit() {
    this.dataService.getData()
    .subscribe(data => this.records = data);
  }

  sort(property){
    this.isDesc = !this.isDesc;  
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

}