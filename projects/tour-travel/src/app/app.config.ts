import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/compat/database'
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { constant, firebaseConfig } from './model/constant';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom([AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ]),
  ],
};
