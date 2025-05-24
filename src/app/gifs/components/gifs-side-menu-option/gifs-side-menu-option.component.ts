import { ChangeDetectionStrategy, Component } from '@angular/core';
import {RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'app-gifs-side-menu-option',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-option.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptionComponent {

  menuOptions: MenuOption[] = [{
    icon: 'fa-solid fa-chart-line',
    label: 'Trending',
    subLabel: 'gifs populares',
    router: '/dashboard/trending'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    label: 'Search',
    subLabel: 'gifs por nombre',
    router: '/dashboard/search'
  }]

}
