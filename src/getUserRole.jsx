// Import necessary Firebase functions for authentication and database
import { getDatabase, ref, child, get } from 'firebase/database';

// Function to get user role from the '/users' database
const getUserRole = async (user) => {
  try {
    if (!user) {
      return null;
    }

    const db = getDatabase();
    

    // Assuming user's email is used for identification
    const userEmail = user.email;
    // console.log(userEmail)
    // Fetch user role from the '/users' database based on email
    const usersRef = ref(db, '/users');
    // console.log(usersRef)
    const snapshot = await get(child(db, '/users', userEmail.replace('.', '_')));
    // console.log(snapshot)

    if (snapshot.exists()) {
      return snapshot.val().role;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user role:', error);
    return null;
  }
};

export default getUserRole;
