import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistroPropietarioComponent } from './pages/registro-propietario/registro-propietario.component';
import { PanelComponent } from './pages/panel/panel.component';
import { RegistroCalleComponent } from './pages/registro-calle/registro-calle.component';
import { RegistroPredioComponent } from './pages/registro-predio/registro-predio.component';
import { DeudasComponent } from './pages/deudas/deudas.component';
import { ModuloCajaComponent } from './pages/modulo-caja/modulo-caja.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'main',
        component: MainPageComponent,
        children: [
            {
                path: '',
                component: PanelComponent,
            },
            {
                path: 'registro/propietario',
                component: RegistroPropietarioComponent,
            },
            {
                path: 'registro/calle',
                component: RegistroCalleComponent,
            },
            {
                path: 'registro/predio',
                component: RegistroPredioComponent,
            },
            {
                path: 'predio/deudas',
                component: DeudasComponent,
            },
            {
                path: 'modcaja',
                component: ModuloCajaComponent,
            },
            {
                path: 'perfil',
                component: PerfilUsuarioComponent,
            },
            {
                path: 'modulo_asistencia',
                component: AsistenciaComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
