import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { FutureComponent } from './future/future.component';
import { DiplomaComponent } from './diploma/diploma.component';
import { AutomobileComponent } from './automobile/automobile.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { MechComponent } from './mech/mech.component';

import { InfoComponent } from './info/info.component';
import { CivilComponent } from './civil/civil.component';
import { EeeComponent } from './eee/eee.component';
import { MetallurgeyComponent } from './metallurgey/metallurgey.component';
import { HotelComponent } from './hotel/hotel.component';
import { JournalismComponent } from './journalism/journalism.component';
import { PhotoComponent } from './photo/photo.component';
import { PsychologyComponent } from './psychology/psychology.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FineartsComponent } from './finearts/finearts.component';
import { FashionComponent } from './fashion/fashion.component';
import { GraphicComponent } from './graphic/graphic.component';
import { DwebComponent } from './dweb/dweb.component';
import { UploadComponent } from './upload/upload.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DgameComponent } from './dgame/dgame.component';
import { RegisterComponent } from './register/register.component';
import { LogincreateComponent } from './logincreate/logincreate.component';
import { LoginreadComponent } from './loginread/loginread.component';
import { LogindeleteComponent } from './logindelete/logindelete.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'future',
    component:FutureComponent
  },
  {
    path:'diploma',
    component:DiplomaComponent
  },
  {
    path:'automobile',
    component:AutomobileComponent
  },
  {
    path:'cse',
    component:CseComponent
  },
  {
    path:'ece',
    component:EceComponent
  },
  {
    path:'mech',
    component:MechComponent
  },
 
  {
    path:'info',
    component:InfoComponent
  },
  {
    path:'civil',
    component:CivilComponent
  },
  {
    path:'eee',
    component:EeeComponent
  },
  {
    path:'metallurgey',
    component:MetallurgeyComponent
  },
  {
    path:'hotel',
    component:HotelComponent
  },
  {
    path:'journalism',
    component:JournalismComponent
  },
  {
    path:'photo',
    component:PhotoComponent
  },
  {
    path:'psychology',
    component:PsychologyComponent
  },
  {
    path:'marketing',
    component:MarketingComponent
  },
  {
    path:'finearts',
    component:FineartsComponent
  },
  {
    path:'fashion',
    component:FashionComponent
  },
  {
    path:'graphic',
    component:GraphicComponent
  },
  {
    path:'dweb',
    component:DwebComponent
  },
  {
    path:'upload',
    component:UploadComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'details',
    component:DetailsComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'dgame',
    component:DgameComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'logincreate',
    component:LogincreateComponent
  },
  {
    path:'loginread',
    component:LoginreadComponent
  },
  {
    path:'logindelete',
    component:LogindeleteComponent
  },
 {
  path:'main',
  component:MainComponent
 }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
