import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeartComponent } from './heart/heart.component';
import { version } from './version';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
})
export class AppComponent {
    title = 'heartApp';
    public increment(): void {
        this.currentValue++;
    }
    currentValue = 1;
    getCurrentValue() {
        return this.currentValue.toString();
    }
    public getVersion(): number {
        return version;
    }
}
