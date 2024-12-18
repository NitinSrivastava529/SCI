import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constant } from '../model/constant';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

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
      '/js/jquery.min.js',
      '/js/jquery-migrate-3.0.1.min.js',
      '/js/popper.min.js',
      '/js/bootstrap.min.js',
      '/js/jquery.easing.1.3.js',
      '/js/jquery.waypoints.min.js',
      '/js/jquery.stellar.min.js',
      '/js/owl.carousel.min.js',
      '/js/jquery.magnific-popup.min.js',
      '/js/jquery.animateNumber.min.js',
      '/js/bootstrap-datepicker.js',
      '/js/scrollax.min.js',
      '/js/main.js'     
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
