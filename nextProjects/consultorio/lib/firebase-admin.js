var admin = require("firebase-admin");

    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key: process.env.FIREBASE_PRIVATE_KEY,
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
        }),
        databaseURL: "https://consultorio-fit-84670-default-rtdb.firebaseio.com",
      });
    } catch (error) {
      if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error("Firebase admin initialization error", error.stack);
      }
    }

    export default admin.firestore();