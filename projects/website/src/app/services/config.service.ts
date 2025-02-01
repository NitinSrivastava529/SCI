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
        '/assets/js/plugins/jquery-3-6-0.min.js',
        '/assets/js/plugins/bootstrap.min.js',         
        '/assets/js/plugins/fontawesome.js',         
        '/assets/js/plugins/aos.js',         
        '/assets/js/plugins/counter.js',         
        '/assets/js/plugins/gsap.min.js',         
        '/assets/js/plugins/ScrollTrigger.min.js',         
        '/assets/js/plugins/Splitetext.js',         
        '/assets/js/plugins/sidebar.js',         
        '/assets/js/plugins/magnific-popup.js',         
        '/assets/js/plugins/mobilemenu.js',         
        '/assets/js/plugins/owlcarousel.min.js',         
        '/assets/js/plugins/gsap-animation.js',         
        '/assets/js/plugins/nice-select.js',         
        '/assets/js/plugins/waypoints.js',         
        '/assets/js/plugins/slick-slider.js',         
        '/assets/js/plugins/circle-progress.js',         
        '/assets/js/main.js'     
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
