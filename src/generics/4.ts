type User2 = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User2>) {
  // Оновлення користувача
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});