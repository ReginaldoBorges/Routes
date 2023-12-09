import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

// Routes
import { DashbordRoutingModule } from './dashboard-routing-module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashbordRoutingModule],
})
export class DashboardModule {}
