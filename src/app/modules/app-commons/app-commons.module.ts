import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[
    HeaderComponent,
  ]
})
export class AppCommonsModule { }
