import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [LoadingComponent, NavigationComponent],
  imports: [CommonModule, MatToolbarModule, MatProgressSpinnerModule],
  exports: [LoadingComponent, NavigationComponent],
})
export class SharedModule {}
