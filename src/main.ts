import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { environment } from './environments/environment';
import { routes } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideRouter(routes, withComponentInputBinding())
  ]
}).catch(err => console.error(err));
