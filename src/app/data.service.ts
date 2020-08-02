import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Email } from './contact/email';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private api = "https://pk-portfolio-backend.herokuapp.com/api/emaildata";
  private downloadApi = "https://pk-portfolio-backend.herokuapp.com/api/download"

  public postEmailForm(emaildata : any) {
    return this.http.post(this.api, emaildata, {responseType: "json"})
  }

  public downloadCv(): Observable<any>{
    return this.http.get(this.downloadApi,{responseType: "blob"});
  }

}


