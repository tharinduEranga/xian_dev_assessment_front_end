import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {Observable} from 'rxjs';
import {Common} from '../util/app-util';

@Injectable({
    providedIn: 'root'
})
export class CartonService extends DataService<CartonDTO> {
    private cartonUrl = Common.BASE_URL.concat('/carton');
    constructor(private httpClient: HttpClient) {
        super('/carton', httpClient);
    }

    getCartonNames(): Observable<CommonResponse<CartonDTO[]>> {
        return this.httpClient.get<CommonResponse<CartonDTO[]>>(this.cartonUrl.concat('/names'));
    }
}
