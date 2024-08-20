interface OnSetPositions {
  onSetPositions: React.Dispatch<
    React.SetStateAction<{
      home: number;
      about: number;
      services: number;
      testimonials: number;
      contact: number;
    }>
  >;
}

interface AboutProps extends OnSetPositions {}

interface BrandProps extends OnSetPositions {}

interface ContactProps extends OnSetPositions {}

interface HomeProps extends OnSetPositions {}

interface StartupProps extends OnSetPositions {}

interface ServicesProps extends OnSetPositions {}

interface TestimonialsProps extends OnSetPositions {}

export type {
  AboutProps,
  BrandProps,
  ContactProps,
  HomeProps,
  StartupProps,
  ServicesProps,
  TestimonialsProps,
};
