import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class CartonService extends DataService<CartonDTO> {
    constructor(private httpClient: HttpClient) {
        super('/carton', httpClient);
    }
}
