import { auth } from './firebase';

//Sign up
export const createUserWithEmail = ( email, password ) =>
  auth.createUserWithEmail( email, password );

//Sign in
export const signInWithEmail = ( email, password ) =>
  auth.signInWithEmail( email, password );

//Sign out
export const signOut = () => 
  auth.signOut();