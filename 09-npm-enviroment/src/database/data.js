async function connectToDatabase(user, password) {
   if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
      console.log('Connected to database...');
   } else {
      console.log('Invalid credentials');
   }
}

export default connectToDatabase;
