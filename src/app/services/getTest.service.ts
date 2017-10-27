import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetTestService {

    constructor(private http: Http) { }

    getTestPhotoList() {
        return this.http.get("https://jsonplaceholder.typicode.com/photos")
            .map((res) => res.json());
    }
}