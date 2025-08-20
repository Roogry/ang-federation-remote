import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {

  private http = inject(HttpClient);

  fetchProvinces() {
    return this.http.get<Province[]>('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
  }

  fetchRegencies(provinceId: string) {
    return this.http.get<Regency[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
  }

  fetchDistricts(regencyId: string) {
    return this.http.get<District[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
  }

  fetchVillages(districtId: string) {
    return this.http.get<Village[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`);
  }

}

export type Province = {
  id: string,
  name: string
}

export type Regency = {
  id: string,
  name: string,
  province_id: string
}

export type District = {
  id: string,
  name: string,
  regency_id: string
}

export type Village = {
  id: string,
  name: string,
  district_id: string
}