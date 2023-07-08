import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { LogincreateComponent } from './logincreate/logincreate.component';
import { LoginreadComponent } from './loginread/loginread.component';
import { LoginupdateComponent } from './loginupdate/loginupdate.component';
import { LogindeleteComponent } from './logindelete/logindelete.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DgameComponent } from './dgame/dgame.component';
import { RegisterComponent } from './register/register.component';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { RegisterinsertComponent } from './registerinsert/registerinsert.component';
import { RegisterreadComponent } from './registerread/registerread.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AppComponent,
   
    CreateComponent,
        ReadComponent,
        FutureComponent,
        DiplomaComponent,
        AutomobileComponent,
        CseComponent,
        EceComponent,
        MechComponent,
   
        InfoComponent,
        CivilComponent,
        EeeComponent,
        MetallurgeyComponent,
        HotelComponent,
        JournalismComponent,
        PhotoComponent,
        PsychologyComponent,
        MarketingComponent,
        FineartsComponent,
        FashionComponent,
        GraphicComponent,
        DwebComponent,
        UploadComponent,
        DeleteComponent,
        DetailsComponent,
        LogincreateComponent,
        LoginreadComponent,
        LoginupdateComponent,
        LogindeleteComponent,
        GalleryComponent,
        DgameComponent,
        RegisterComponent,
        MainloginComponent,
        RegisterinsertComponent,
        RegisterreadComponent,
        MainComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
