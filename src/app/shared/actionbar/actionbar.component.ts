import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { LanguageService } from '~/services';


@Component({
  selector: 'ns-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss'],
})
export class ActionbarComponent implements OnInit {

  @Input() title: string;
  @Input() showBack = false;
  @Input() color = '#123456';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {}

  languageTap() {
    if (this.languageService.getLanguage() === 'ja') {
        this.languageService.setLanguage('en');
    } else {
        this.languageService.setLanguage('ja');
    }
  }

  rateTap() {
    console.log('rate');
  }

  onAndroidBack() {
    // this.routerHelper.backToPreviousPage();
  }

}
