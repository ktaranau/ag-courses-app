import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { EmailValidatorDirective } from './directives/validator/validator.directive';

var components: Type<any>[] = [HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, EmailValidatorDirective]

@NgModule({
  declarations: components, 
  imports: [
    CommonModule, 
    FontAwesomeModule
  ],
  exports: components
})
export class SharedModule { }

