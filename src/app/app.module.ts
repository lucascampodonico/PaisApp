import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, FormsModule, PaisModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
