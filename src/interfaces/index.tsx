interface User {
  gender: string;
  name: {
    first: string;
    last: string;
  }
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  }
  coordinates: {
    latitude: string;
    longitude: string;
  }
  email: string;
  login: {
    uuid: string;
  }
  dob: {
    age: number;
  }
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  },
}

interface RequestUsers {
  results: User[];
  info: {
    results: number;
  }
}

interface Provider {
  children: React.ReactNode;
}

export type { RequestUsers, Provider, User, };