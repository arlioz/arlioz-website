import { type ProjectImage } from './types';

/** Image dimensions are the intrinsic sizes of the files in /public/images. */
export const media = {
  logo: { src: '/images/logo-arlioz.webp', width: 900, height: 1000 },
  // Optimised images are cached for a year under their URL: when a photo changes,
  // give the file a new name (-v2, -v3…) or visitors keep the old one.
  team: {
    amaury: { src: '/images/team/amaury-v2.webp', width: 750, height: 750 },
    guy: { src: '/images/team/guy-v2.webp', width: 1122, height: 1122 },
  },
  restomax: {
    url: 'natithai.book.ezordr.app',
    desktop1: { src: '/images/work/restomax-book/desktop-1.webp', width: 1600, height: 1000 },
    desktop2: { src: '/images/work/restomax-book/desktop-2.webp', width: 1600, height: 1000 },
    tablet1: { src: '/images/work/restomax-book/tablet-1.webp', width: 600, height: 1187 },
    tablet2: { src: '/images/work/restomax-book/tablet-2.webp', width: 600, height: 863 },
    mobile1: { src: '/images/work/restomax-book/mobile-1.webp', width: 390, height: 1564 },
    mobile2: { src: '/images/work/restomax-book/mobile-2.webp', width: 390, height: 844 },
  },
  jkstudio: {
    url: 'jkstudio.fr',
    desktop: { src: '/images/work/jk-studio/desktop.webp', width: 800, height: 2512 },
    tablet: { src: '/images/work/jk-studio/tablet.webp', width: 400, height: 3208 },
    mobile: { src: '/images/work/jk-studio/mobile.webp', width: 260, height: 3440 },
  },
} as const;

/**
 * Company logos (`components/ui/BrandLogo.tsx`): `trustLogos` are the companies and
 * schools where the founders have worked (Team section), `clientLogos` the clients
 * running our work in production (band under the hero).
 * `src` files are single-tone masks (alpha only, 120 px high) shown in the text
 * colour; `w`/`h` give the ratio. `name: true` writes the name next to a symbol-only
 * logo; no `src` means a text wordmark (no usable logo file).
 */
export interface TrustLogo {
  name: string;
  src?: string;
  w?: number;
  h?: number;
  withName?: boolean;
}

export const trustLogos: TrustLogo[] = [
  { name: 'IBM', src: '/images/logos/ibm.webp', w: 322, h: 120 },
  { name: 'Candriam', src: '/images/logos/candriam.webp', w: 602, h: 120 },
  { name: 'SWIFT', src: '/images/logos/swift.webp', w: 120, h: 120 },
  { name: 'Restomax', src: '/images/logos/restomax.webp', w: 491, h: 120 },
  { name: 'HELHa', src: '/images/logos/helha.webp', w: 340, h: 120 },
  { name: 'Radyo', src: '/images/logos/radyo.webp', w: 122, h: 120, withName: true },
  { name: 'EasyOrder' },
  { name: 'Pharmasimple', src: '/images/logos/pharmasimple.webp', w: 988, h: 120 },
  { name: 'EICPN', src: '/images/logos/eicpn.webp', w: 138, h: 120 },
  { name: 'SBIM' },
  { name: 'Agoraz', src: '/images/logos/agoraz.webp', w: 480, h: 120 },
];

export const clientLogos: TrustLogo[] = [
  { name: 'Radyo', src: '/images/logos/radyo.webp', w: 122, h: 120, withName: true },
  { name: 'Restomax', src: '/images/logos/restomax.webp', w: 491, h: 120 },
  { name: 'JK Studio' },
];

export function img(
  base: { src: string; width: number; height: number },
  alt: string,
): ProjectImage {
  return { ...base, alt };
}
