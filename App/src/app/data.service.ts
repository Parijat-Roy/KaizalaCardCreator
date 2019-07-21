import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  saveHtml(html:{}) : Promise<{}>{
 
    return this.http['post']('http://localhost:8080/html/', JSON.stringify(html),{headers:this.headers})
     .toPromise().then(res => res.json() )
    
    // this.http.post('http://localhost:8080/html/', JSON.stringify(hero),{headers:this.headers})
    // .toPromise().then(res => res.json() );
    
  
   }

  downloadFile(){
    return this.http.get('http://localhost:8080/html/download');
  }
}
