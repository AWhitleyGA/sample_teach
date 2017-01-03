class User {
  constructor(email, password) {
    this.email = email
    this.password = password
  }
  changePassword(newPassword) {
    this.password = newPassword
  }
}

class Admin extends User{
  constructor(email, password) {
    super(email, password)
    this.permissions = []
  }
  changeEmail(newEmail) {
    this.email = newEmail
  }
  addPermission(newPermission) {
    this.permissions.push(newPermission)
  }
}

aw = new Admin('awhit@gmail.com', 'password')
sk = new User('sking@gmail.com', '9876')
