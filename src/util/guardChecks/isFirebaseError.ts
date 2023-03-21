import type { FirebaseError } from 'firebase/app'

const isFirebaseError = (error: unknown): error is FirebaseError => {
	const castedType = error as FirebaseError
	return 'code' in castedType && 'name' in castedType
}

export default isFirebaseError
