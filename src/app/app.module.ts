import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RegistroCalleComponent } from './pages/registro-calle/registro-calle.component';
import { RegistroPredioComponent } from './pages/registro-predio/registro-predio.component';
import { DeudasComponent } from './pages/deudas/deudas.component';
import { SweetAlertdosModule } from './sweet-alertdos/sweet-alertdos.module';
import { CurrencyPipe } from '@angular/common';
import { ModuloCajaComponent } from './pages/modulo-caja/modulo-caja.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
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
        SwitchButtonComponent,
        RegistroCalleComponent,
        RegistroPredioComponent,
        DeudasComponent,
        ModuloCajaComponent,
        PerfilUsuarioComponent,
        AsistenciaComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        SweetAlertdosModule,
        ZXingScannerModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        CurrencyPipe,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
