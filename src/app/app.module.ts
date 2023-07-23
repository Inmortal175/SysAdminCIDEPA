import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './componentes/input/input.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TokenInterceptor } from './interceptors/token.inteceptor';
import { RegistroPropietarioComponent } from './pages/registro-propietario/registro-propietario.component';
import { PanelComponent } from './pages/panel/panel.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { SelectComponent } from './componentes/select/select.component';
import { ButtonComponent } from './componentes/button/button.component';
import { SwitchButtonComponent } from './componentes/switch-button/switch-button.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    MainPageComponent,
    RegistroPropietarioComponent,
    PanelComponent,
    SpinnerComponent,
    SelectComponent,
    ButtonComponent,
    SwitchButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DropdownModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
