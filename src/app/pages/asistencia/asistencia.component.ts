import { Component } from '@angular/core';
import { BarcodeFormat, BrowserMultiFormatReader } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
    selector: 'app-asistencia',
    templateUrl: './asistencia.component.html',
    styleUrls: ['./asistencia.component.css'],
})
export class AsistenciaComponent {
    allowedFormats = [BarcodeFormat.QR_CODE];
    availableDevices!: MediaDeviceInfo[];
    currentDevice: MediaDeviceInfo | undefined;

    constructor() {}

    ngOnInit(): void {
        this.listAvailableDevices();
    }

    listAvailableDevices(): void {
        const codeReader = new BrowserMultiFormatReader();
        codeReader
            .listVideoInputDevices()
            .then((videoInputDevices: MediaDeviceInfo[]) => {
                this.availableDevices = videoInputDevices;

                // Select the first device by default
                if (this.availableDevices.length > 0) {
                    this.currentDevice = this.availableDevices[0];
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    onDeviceSelectChange(event: Event): void {
        const selectedDeviceId = (event.target as HTMLSelectElement).value;
        this.currentDevice = this.availableDevices.find((device) => device.deviceId === selectedDeviceId);
    }

    scanSuccess(event: any) {
        console.log(event);
    }
}
