import { Component } from '@angular/core';

import { MusicPage } from '../music/music';
import { NewsPage } from '../news/news';
import { AccueilPage } from '../accueil/accueil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AccueilPage;
  tab2Root = MusicPage;
  tab3Root = NewsPage;

  constructor() {

  }
}
