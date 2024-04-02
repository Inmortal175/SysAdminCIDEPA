import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Renderer2, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit, OnInit{
  showSpinner = false;

  isFullScreen = true;

  //inicializadores de DOM
  @ViewChild('user_tag') user_tag! : ElementRef
  @ViewChild('user_options') user_options!: ElementRef;
  // para control de la barra
  @ViewChild('barra_icon') barra_icon!: ElementRef;
  @ViewChild('main') main!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;


  constructor(private render : Renderer2, private router: Router, private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showSpinner = true
        setTimeout(() => {
          this.showSpinner = false; // Ocultar el spinner después de un breve retraso
        }, 550);
      }
    });
  }

  //pantalla completa
  toggleFullScreen() {
    const elem = this.elementRef.nativeElement;
    if (!this.isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      this.isFullScreen = true
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
      this.isFullScreen = false
    }


}

  //manejador de eventos con AfterView Init

  ngAfterViewInit(): void {
    this.ItemVisit(1, 2)
    const RENDER = this.render;//renderer 2

    //constantes para perfil de usuario
    const USER_TAG         = this.user_tag.nativeElement;
    const USER_OPTIONS     = this.user_options.nativeElement;
    let user_option_active = false;

    //constantes para el control de la barra
    const BAR_ICON = this.barra_icon.nativeElement;
    const MAIN     = this.main.nativeElement;
    const MENU     = this.menu.nativeElement;
    const FOOTER   = this.footer.nativeElement;
    let active_bar = true;

    //funcion para cambiar de clase o estilo a un elemento
    function ChangeOldClassName(el: any, old_class : string, new_class : string) {
      RENDER.removeClass(el, old_class)
      RENDER.addClass(el, new_class)
    };

    //funcion para abrir la tarjeta de usuario
    function openUserCard() {
      if (!user_option_active) {
        user_option_active = true;
        ChangeOldClassName(USER_OPTIONS, 'hide', 'show')
      } else {
        user_option_active = false;
        ChangeOldClassName(USER_OPTIONS, 'show', 'hide')
      }
    }
    this.render.listen(USER_TAG, 'click', openUserCard) //evento

    //funcion para contraer o expandir la barra
    const ADMIN_ITEMS = ["Panel", "Registro de Predios", "Usuarios", "Registro de Calles", "Deudas", "Pagos", "Registro de Asistencia", "Caja"]
    const USER_ITEMS = ["Editar Perfil", "Cerrar Sesión"]
    function BarraToogle() {
      console.log(MENU.children[0].children[0])
      if (!active_bar) {
        RENDER.removeClass(MAIN, 'collapse');
        RENDER.removeClass(MENU, 'contract');
        RENDER.removeClass(FOOTER, 'f-contract')
        active_bar = true;

        for (let i = 0; i < MENU.children.length; i++){
          for (let j = 0; j < MENU.children[i].children.length ; j++){
            MENU.children[i].children[j].children[0].children[1].className = 'show'
            // condicion para que el tooltip elimine cuando se expanda el menu
            let LI_item = MENU.children[i].children[j]
            if (i == 0) {
              RENDER.removeAttribute(LI_item, 'data-bs-toggle')
              RENDER.removeAttribute(LI_item, "data-bs-placement")
              RENDER.removeAttribute(LI_item, "title")
            } else if (i == 1) {
              RENDER.removeAttribute(LI_item, 'data-bs-toggle')
              RENDER.removeAttribute(LI_item, "data-bs-placement")
              RENDER.removeAttribute(LI_item, "title")
            }
          }
        }
      } else {
        RENDER.addClass(MAIN, 'collapse');
        RENDER.addClass(MENU, 'contract');
        RENDER.addClass(FOOTER, 'f-contract')
        active_bar = false;

        for (let i = 0; i < MENU.children.length; i++){
          for (let j = 0; j < MENU.children[i].children.length ; j++){
            MENU.children[i].children[j].children[0].children[1].className = 'hide'
            // condicion para que el tooltip se apñique cuando esté contraido
            let LI_item = MENU.children[i].children[j]
            if (i == 0) {
              RENDER.setAttribute(LI_item, 'data-bs-toggle', "tooltip")
              RENDER.setAttribute(LI_item, "data-bs-placement", "right")
              RENDER.setAttribute(LI_item, "title", ADMIN_ITEMS[j])
            } else if (i == 1) {
              RENDER.setAttribute(LI_item, 'data-bs-toggle', "tooltip")
              RENDER.setAttribute(LI_item, "data-bs-placement", "right")
              RENDER.setAttribute(LI_item, "title", USER_ITEMS[j])
            }
          }
        }
      }
    }
    RENDER.listen(BAR_ICON, 'click', BarraToogle)
  }

  Marcador_anterior : any
  ItemVisit(num_section: number, num_item: number) {
    if (this.Marcador_anterior) {
      this.render.removeClass(this.Marcador_anterior, 'm-activo')
    }
    const MENU = this.menu.nativeElement;
    const MARCADOR = MENU.children[num_section == 2 ? 2 : num_section - 1].children[num_item - 1].children[0].children[2]
    this.Marcador_anterior = MARCADOR
    for (let i = 0; i < MENU.children[0].children.length; i++){
      this.render.removeClass(MENU.children[0].children[i].children[0].children[2], 'm-activo')
    }
    this.render.addClass(MARCADOR, 'm-activo')
  }


}
