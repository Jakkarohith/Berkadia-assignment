import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
@Input() items:{name: string,desc:string, image: string }[];
@Output() addCartResult = new EventEmitter();
@Output() removeCartResult = new EventEmitter();

  addResult:number=0;
  addcount:number=0;
  removeresult:number=0;
  removecount:number=0;
  addItem(){
   this.addcount=++this.addResult;
    this.addCartResult.emit(this.addcount);
  }
  removeItem(){
    this.removecount=++this.removeresult;
    console.log(this.removecount);
     this.removeCartResult.emit(this.removecount);
   }
 ngOnInit() {
  }
  
}
