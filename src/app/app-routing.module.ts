import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main/main-page/main-page.component';
import { AreaOfInterestPageComponent } from './projects/area-of-interest-page/area-of-interest-page.component';
import { ArrayBasedChessComponent } from './projects/project-pages/array-based-chess/array-based-chess.component';
import { NnDigitRecognitionComponent } from './projects/project-pages/nn-digit-recognition/nn-digit-recognition.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent},
  { path: 'area-of-interest/:id', component: AreaOfInterestPageComponent},
  { path: 'project/digit-recognition', component: NnDigitRecognitionComponent},
  { path: 'project/array-based-chess-engine', component: ArrayBasedChessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
