import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { GetPhotoService } from './services/getPhoto.service';
import { GetTestService } from './services/getTest.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  { path: "", component: UserComponent },
  { path: "about", component: AboutusComponent },
  { path: "test", component: TestComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GetPhotoService, GetTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
