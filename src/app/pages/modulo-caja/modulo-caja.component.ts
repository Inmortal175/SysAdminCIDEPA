import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
    selector: 'app-modulo-caja',
    templateUrl: './modulo-caja.component.html',
    styleUrls: ['./modulo-caja.component.css'],
})
export class ModuloCajaComponent implements AfterViewInit {
    constructor(private render: Renderer2) {}

    @ViewChildren('li') TabButtons!: QueryList<any>;
    @ViewChildren('bloque') TabBloque!: QueryList<any>;

    ngAfterViewInit(): void {
        this.TabButtons.forEach((LiElement, index) => {
            const Li: HTMLLIElement = LiElement.nativeElement;
            if (Li.getAttribute('aria-disabled') !== 'true') {
                // agrega el evento click a cada li mientras no tenga el atributo aria-disabled=true
                this.render.listen(Li, 'click', () => {
                    this.TabButtons.forEach((CadaLi, indice) => {
                        this.render.removeClass(CadaLi.nativeElement, 'activo');
                        this.render.removeClass(this.TabBloque.get(indice).nativeElement, 'activo');
                    });
                    this.render.addClass(Li, 'activo');
                    this.render.addClass(this.TabBloque.get(index).nativeElement, 'activo');
                    console.log(Li);
                });
            }
        });
    }
}
