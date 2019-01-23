import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloclient';
  
  plist:any = [];
  place = {};
  
  // VAR_NAME :: TYPE
  httpClient:HttpClient;

  // MAKEING READY HTTPCLINT.
  constructor(httpClient:HttpClient){
    this.httpClient = httpClient;

    this.listPlace();
  }


  listPlace() {
    // SERVER CALL
    let url = "http://localhost:8080/demoapp/spring/api/plist";
    let obs = this.httpClient.get(url);
    obs.subscribe((plist)=>{
      console.log(plist);
      this.plist = plist;
    });
  }
  
  addPlace() {
    console.log("Add Place");
    console.log(this.place);


    let url = "http://localhost:8080/demoapp/spring/api/padd";
    let obs = this.httpClient.post(url, this.place);
    obs.subscribe((data)=>{
      console.log(data);

      this.place = {};
      this.listPlace();
    });

  }

  editPlace(irow) {
    console.log("EDIT PLACE");
    this.place = irow;

  }
}
