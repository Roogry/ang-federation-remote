import { Routes } from '@angular/router';
import { EditLocationPageComponent } from './pages/edit-location-page/edit-location-page.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ProvinsiComponent } from './components/feature/provinsi/provinsi.component';
import { KecamatanComponent } from './components/feature/kecamatan/kecamatan.component';
import { KotaComponent  } from './components/feature/kota/kota.component';
import { KelurahanComponent } from './components/feature/kelurahan/kelurahan.component';
import { ProfileComponent } from './components/page/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'location/edit', pathMatch: 'full' },
  { path: 'location/edit', component: EditLocationPageComponent},
  { path: 'provinsi', component: ProvinsiComponent},
  { path: 'kecamatan', component: KecamatanComponent},
  { path: 'kota', component: KotaComponent},
  { path: 'kelurahan', component: KelurahanComponent},
  { path: 'profile', component: ProfileComponent},
  

];
