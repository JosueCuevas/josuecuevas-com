export type TechUsed = {
  url: string;
  alt: string;
};

export type Nav = {
  link: string;
  href: string;
};

export type Services = {
  title: string;
  description: string;
  bg_image: string;
};

export type Benefits = {
  title: string;
  description: string;
  imgUrl: string;
};

export interface Form {
  name: string;
  comments: string;
  submit: string;
}

export type Placeholders = {
  name: string;
  email: string;
  comments: string;
};
