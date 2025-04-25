import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { StarRatingComponent, StarRatingConfig } from 'angular-star-rating';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  provideHttpClient(), provideToastr(), StarRatingConfig, StarRatingComponent]
};
