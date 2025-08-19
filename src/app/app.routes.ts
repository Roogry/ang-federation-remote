import { Routes } from '@angular/router';
import { EditLocationPageComponent } from './pages/edit-location-page/edit-location-page.component';
import { ButtonComponent } from './components/shared/button/button.component';

export const routes: Routes = [
  { path: '', redirectTo: 'location/edit', pathMatch: 'full' },
  { path: 'location/edit', component: EditLocationPageComponent},
];
