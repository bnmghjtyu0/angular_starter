import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from '@app/app.routes';
import { AppComponent } from './app/app.component';

const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
};

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
