import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class Auth {
    logInurl:string="https://dummyjson.com/auth/login";
    registerurl:string="https://dummyjson.com/users/add";


    constructor(private Http:HttpClient){

    }

    getlogIn(paylow:any):Observable<any>{
        return this.Http.post<any>(this.logInurl,paylow)
    }

    getRegister(loginData:any):Observable<any>{
        return this.Http.post<any>(this.registerurl,loginData)
    }

}
