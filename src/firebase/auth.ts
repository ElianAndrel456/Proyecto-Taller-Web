import { auth } from './config'
import {
  browserSessionPersistence,
  FacebookAuthProvider,
  setPersistence,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from 'firebase/auth'
import { useUserStore } from '../stores/user'
import izitoast from 'izitoast'
import type { UserState } from '@/types/UserType'

export const createUserWithEmail = async (
  email: string,
  password: string,
  name: string,
  lastname: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(userCredential.user, {
      displayName: name + ' ' + lastname,
    })

    console.log('userCredential', userCredential.user)
  } catch (error: any) {
    izitoast.error({
      title: 'Error',
      message: (error.message as string) || 'Error al crear usuario',
      position: 'bottomRight',
      transitionIn: 'fadeInUp',
      transitionOut: 'fadeOutDown',
      timeout: 4000,
    })
  }
}

export const signFacebook = async () => {
  const provider = new FacebookAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)

    const user: UserState = {
      id: result.user.uid,
      name: result.user.displayName as string,
      email: result.user.email as string,
      auth: true,
    }

    useUserStore().setUser(user)
    console.log(result)
  } catch (error: any) {
    izitoast.error({
      title: 'Error',
      message: error.message,
      position: 'bottomRight',
      transitionIn: 'fadeInUp',
      transitionOut: 'fadeOutDown',
      timeout: 1000,
    })
  }
}
