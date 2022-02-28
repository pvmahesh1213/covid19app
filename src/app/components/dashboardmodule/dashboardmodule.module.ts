import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResloveGuardService } from '../../guards/reslove.guard.service';
import { LeftComponent } from './component/left/left.component';
import { RightComponent } from './component/right/right.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../../shared/material/material.module';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { IndiamapComponent } from './component/indiamap/indiamap.component';
import { SeriesmapComponent } from './component/seriesmap/seriesmap.component';
import { CardsComponent } from './component/cards/cards.component';
import { TableComponent } from './component/table/table.component';
import { TransformnumberPipe } from '../pipes/transformnumber.pipe';
import { RighttopcontainerComponent } from './component/righttopcontainer/righttopcontainer.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: './home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, resolve: { data: ResloveGuardService } },
      { path: 'profile', component: ProfileComponent },
    ]
  }
]

@NgModule({
  declarations: [MainComponent, LeftComponent, RightComponent, SidebarComponent, HomeComponent, ProfileComponent, IndiamapComponent, SeriesmapComponent, CardsComponent, TableComponent, TransformnumberPipe, RighttopcontainerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class DashboardmoduleModule { }
