interface OnSetPositions {
  onSetPositions: React.Dispatch<
    React.SetStateAction<{
      home: number;
      about: number;
      brand: number;
      startup: number;
      contact: number;
    }>
  >;
}

interface AboutProps extends OnSetPositions {}

interface BrandProps extends OnSetPositions {}

interface ContactProps extends OnSetPositions {}

interface HomeProps extends OnSetPositions {}

interface StartupProps extends OnSetPositions {}

export type { AboutProps, BrandProps, ContactProps, HomeProps, StartupProps };
