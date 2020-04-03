import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 selected:any;
filtered :any;
    stat = [
        { value:"Information Technology",id:"123" },
        { value: "Pharmaceuticals", id:"12" },
        { value: "Automobiles" ,id:"45"},
        { value: "Housing Finance",id:"56" },
        { value: "Infrastructure",id:"57" }];

    status = ['Select Status', 'Information Technology', 'Pharmaceuticals', 'Automobiles', 'Housing Finance', 'Infrastructure'];

constructor() {
        
        }

onOptionsSelected() {
      console.log(this.selected); 
      this.filtered = this.stat.filter(t=>t.value ==this.selected);

    }
}
