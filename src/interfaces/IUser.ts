interface IUser {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
  contactPhone?: string;
  role: string;
  // avatar: string;
}

export default IUser;
