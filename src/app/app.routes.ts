import { Routes } from '@angular/router';
import { EditLocationPageComponent } from './pages/edit-location-page/edit-location-page.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { KecamatanComponent } from './components/feature/kecamatan/kecamatan.component';

export const routes: Routes = [
  { path: '', redirectTo: 'location/edit', pathMatch: 'full' },
  { path: 'location/edit', component: EditLocationPageComponent},
  { path: 'kecamatan', component: KecamatanComponent}
];
