import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../models/contant';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Accept-Control-Allow-Origin', '*')
    constructor(private http: HttpClient) { }
    post(data: any): Observable<any> {
      return this.http.post(constant.API_URL + data.url, data, { headers: this.headers });
    }
    UploadFile(url: string, data: any): Observable<any> {
      return this.http.post(constant.API_URL + url, data, { responseType: 'text' });
    }
    get(data: any): Observable<any> {
      return this.http.get(constant.API_URL + data.url, data);
    }
    public loadScript() {
      const jsArray = [
        //'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js',
        '/sci/js/jquery.min.js',
        '/sci/js/bootstrap.min.js',
        '/sci/js/owl.carousel.js',
        '/sci/js/theme-vendors.min.js',
        '/sci/js/main.js',
        '/sci/js/wow.js',
        '/js/feather.js',
        '/js/baguetteBox.min.js',       
        '/js/custom.js'     
      ];
      for (let i = 0; i < jsArray.length; i++) {
        let node = document.createElement('script');
        node.src = jsArray[i];
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    }
}
