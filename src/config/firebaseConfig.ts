const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
const messagingId = import.meta.env.VITE_FIREBASE_MESSAGING_ID
const appId = import.meta.env.VITE_FIREBASE_APP_ID

const firebaseConfig = {
	apiKey,
	authDomain: `${projectId}.firebaseapp.com`,
	projectId,
	storageBucket: `${projectId}.appspot.com`,
	messagingId,
	appId
}

export default firebaseConfig
