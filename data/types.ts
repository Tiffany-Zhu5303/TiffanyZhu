export type Collaborator = {
  name: string;
  role?: string;
  link?: string;
};

export type Carousel = {
  images: string[];
  titles: string[];
  descriptions: string[];
};

export type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  collaborators: Collaborator[];
  carousel?: Carousel;
  projectroute: string;
};

export type Experiences = {
  Company: string,
  LocationType: string,
  Location?: string,
  Dates: string,
  Position: string,
  Description: string[],
  PersonalNotes: string
}