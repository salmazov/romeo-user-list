export interface Picture {
  comment: string;
  url: string;
}

export interface BasicUser {
  id: string;
  name: string;
  picture: Picture;
  last_login: string;
  online_status: 'ONLINE' | 'OFFLINE' | 'DATE';
}

export interface UserProfile {
  id: string;
  location: {
    name: string;
    distance: number;
  };
  personal: {
    age: number;
  };
  headline: string;
}
  