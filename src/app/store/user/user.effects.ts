import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase";
import firestore = firebase.firestore;

import { Observable, from, of } from 'rxjs';
import {map, switchMap, catchError, take, tap, withLatestFrom, mergeMap, concatMap} from 'rxjs/operators';

import { environment } from '@src/environments/environment';

import { User } from './user.models';

import * as fromActions from './user.actions';

import { NotificationService } from '@app/services';

type Action = fromActions.All;

@Injectable()
export class UserEffects {

  constructor(
    private actions: Actions,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private notification: NotificationService
  ) { }

  @Effect()
  signUpEmail: Observable<Action> = this.actions.pipe(
    ofType(fromActions.Types.SIGN_UP_EMAIL),
    map((action: fromActions.SignUpEmail) => action.credentials),
    switchMap(credentials =>
      from(this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)).pipe(
        tap(() => {
          this.afAuth.currentUser.then((user) => {
            user.sendEmailVerification();
          });
        }),
        map((signUpState) => new fromActions.SignUpEmailSuccess(signUpState.user.uid)),
        catchError(err => {
          this.notification.error(err.message);
          return of(new fromActions.SignUpEmailError(err.message));
        })
      )
    )
  );

}
