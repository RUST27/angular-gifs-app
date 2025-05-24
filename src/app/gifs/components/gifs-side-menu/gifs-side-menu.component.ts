import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from '../gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionComponent } from '../gifs-side-menu-option/gifs-side-menu-option.component';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionComponent],
  templateUrl: './gifs-side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuComponent { }
