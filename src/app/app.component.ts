import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { FootersComponent } from './footers/footers.component';
import { DatepickerInlineCalendarExample } from './activitie-calendar/activitie-calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ActivitiesComponent, MonitorsComponent, FootersComponent, DatepickerInlineCalendarExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4V_GYM_APP';
}
