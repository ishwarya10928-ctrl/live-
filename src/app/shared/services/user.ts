import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    maidenName: string;
    age: number;
    phone: string;
}

@Injectable({
    providedIn: 'root'
})
export class User {
    userApiUrl = "https://dummyjson.com/auth/me";

    constructor(private http: HttpClient) {
    }

    getuser(): Observable<UserProfile> {
        const token = localStorage.getItem('token') || "";
        const headers = new HttpHeaders({
            "Authorization": `Bearer ${token}`
        });
        return this.http.get<UserProfile>(this.userApiUrl, { headers });
    }
}
