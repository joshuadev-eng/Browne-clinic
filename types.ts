
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
}

export enum BookingStep {
  INITIAL = 'INITIAL',
  SELECT_SERVICE = 'SELECT_SERVICE',
  SELECT_TIME = 'SELECT_TIME',
  CONFIRMATION = 'CONFIRMATION'
}
