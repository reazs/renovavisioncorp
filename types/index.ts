export type reviewCardT = {
  title: string;
  username: string;
  fullName: string;
  profileImage?: string;
    description: string;
  rating: string
};

export type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  badges: string[];
  features: string[];
  testimonial: string;
  image: string;
};
