import { Injectable }     from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: Http){
    console.log("Data sevice ready...")
	}
  
    getData(){
      return this.http.get(this.url)
          .map(res => res.json());
  }
    
}
