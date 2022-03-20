import { destroyPlatform, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NbpersonnesComponent } from './nbpersonnes/nbpersonnes.component';
import { AgeComponent } from './age/age.component';
import { BudgetComponent } from './budget/budget.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DepartComponent } from './depart/depart.component';
import { DestinationComponent } from './destination/destination.component';
import { DureeComponent } from './duree/duree.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'objectif', component: QuestionnaireComponent},
  {path: 'nb', component: NbpersonnesComponent},
  {path: 'age', component: AgeComponent},
  {path: 'depart', component: DepartComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'duree', component: DureeComponent},
  {path: 'nourriture', component: NourritureComponent},
  {path: 'scenario', component: ScenarioComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    NbpersonnesComponent,
    AgeComponent,
    BudgetComponent,
    DepartComponent,
    DestinationComponent,
    DureeComponent,
    NourritureComponent,
    ScenarioComponent,
    AccueilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
