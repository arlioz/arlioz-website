import Image from 'next/image';
import Link from 'next/link';
import { type CSSProperties } from 'react';
import { type DeviceSet, type ProjectImage } from '@/content/types';
import { DeviceFrame, deviceScreens } from './DeviceFrame';
import { Glow } from './Glow';

interface DeviceStageProps {
  devices: DeviceSet;
  reversed?: boolean;
  glow: string;
  glowOpacity?: number;
  href?: string;
  ariaLabel?: string;
  /** Case-study hero: the stage spans up to 1100 px, so the images load larger. */
  large?: boolean;
  /** Above the fold: the laptop screen is the page's LCP and loads first. */
  priority?: boolean;
}

/**
 * Vertical distance (in % of the image's own height) the capture can travel
 * inside a frame of the given aspect ratio. Used by the `translate`-based
 * scrolling animations, which stay on the compositor (unlike `object-position`).
 */
function travel(image: ProjectImage, frameW: number, frameH: number): string {
  const imageRatio = image.height / image.width;
  const frameRatio = frameH / frameW;
  const pct = Math.max(0, (1 - frameRatio / imageRatio) * 100);
  return `${pct.toFixed(2)}%`;
}

const frames = {
  desktop: { ...deviceScreens.laptop, sizes: '(max-width: 1080px) 72vw, 42vw' },
  tablet: {
    ...deviceScreens.tablet,
    sizes: '(max-width: 600px) 34vw, (max-width: 1080px) 23vw, 14vw',
  },
  phone: {
    ...deviceScreens.phone,
    sizes: '(max-width: 600px) 21vw, (max-width: 1080px) 13vw, 8vw',
  },
} as const;

/** The same frames across the case-study hero (up to 1100 px wide). */
const heroSizes = {
  desktop: '(max-width: 1100px) 80vw, 880px',
  tablet: '(max-width: 600px) 34vw, 264px',
  phone: '(max-width: 600px) 21vw, 154px',
} as const;

function Screen({
  image,
  alt,
  frame,
  motion,
  className,
  large = false,
  priority = false,
}: {
  image: ProjectImage;
  alt?: ProjectImage;
  frame: keyof typeof frames;
  motion: DeviceSet['motion'];
  className: string;
  large?: boolean;
  priority?: boolean;
}) {
  const f = frames[frame];
  const sizes = large ? heroSizes[frame] : f.sizes;
  const lcp = priority && frame === 'desktop';
  const base = 'absolute top-0 left-0 block h-auto w-full';
  const vars = (img: ProjectImage) => ({ '--travel': travel(img, f.w, f.h) }) as CSSProperties;
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={lcp}
        style={vars(image)}
        className={`${base} ${motion === 'scroll' ? `jk-scroll ${className}` : `rx-a ${className}`}`}
      />
      {motion === 'swap' && alt && (
        <Image
          src={alt.src}
          alt={alt.alt}
          width={alt.width}
          height={alt.height}
          sizes={sizes}
          style={vars(alt)}
          className={`${base} rx-b ${className} opacity-0`}
        />
      )}
    </>
  );
}

/**
 * Composition of three device frames (MacBook, iPad, iPhone, from Apple Frames) with
 * screenshots.
 * `motion: 'swap'` crossfades between two screens; `motion: 'scroll'` slowly
 * scrolls a tall capture. Both are CSS transform/opacity animations only.
 */
export function DeviceStage({
  devices,
  reversed = false,
  glow,
  glowOpacity = 0.16,
  href,
  ariaLabel,
  large = false,
  priority = false,
}: DeviceStageProps) {
  const scroll = devices.motion === 'scroll';
  // No frame of its own: the devices sit directly on the project card (one level of
  // nesting less, as the design review asked).
  const stageClass = `pj-stage stage relative block aspect-[16/11] ${reversed ? 'pj-rev' : ''}`;

  const inner = devices.mockup ? (
    <Image
      src={devices.mockup.src}
      alt={devices.mockup.alt}
      width={devices.mockup.width}
      height={devices.mockup.height}
      sizes="(max-width: 1080px) 92vw, 760px"
      className="absolute inset-0 h-full w-full object-contain"
    />
  ) : (
    <>
      <Glow
        color={glow}
        opacity={glowOpacity}
        blur={120}
        style={{
          width: '60%',
          aspectRatio: '1 / 1',
          left: reversed ? '28%' : '12%',
          top: reversed ? '22%' : '20%',
        }}
      />

      {/* Desktop */}
      <DeviceFrame
        kind="laptop"
        screenBg={devices.screenBg}
        className="dev dev-desk absolute top-[7%] w-[80%]"
        style={reversed ? { left: '2%' } : { right: '2%' }}
      >
        <Screen
          image={devices.desktop}
          alt={devices.desktopAlt}
          frame="desktop"
          motion={devices.motion}
          className={scroll ? 'jk-scroll-desk' : ''}
          large={large}
          priority={priority}
        />
      </DeviceFrame>

      {/* Tablet */}
      <DeviceFrame
        kind="tablet"
        screenBg={devices.screenBg}
        className="dev dev-tab absolute bottom-[6%] w-[24%]"
        style={reversed ? { right: '4%' } : { left: '4%' }}
      >
        <Screen
          image={devices.tablet}
          alt={devices.tabletAlt}
          frame="tablet"
          motion={devices.motion}
          className={scroll ? 'jk-scroll-tab' : 'rx-t'}
          large={large}
          priority={priority}
        />
      </DeviceFrame>

      {/* Phone */}
      <DeviceFrame
        kind="phone"
        screenBg={devices.screenBg}
        className="dev dev-phone absolute bottom-[4%] w-[14%]"
        style={{ left: reversed ? '52%' : '34%' }}
      >
        <Screen
          image={devices.phone}
          alt={devices.phoneAlt}
          frame="phone"
          motion={devices.motion}
          className={scroll ? 'jk-scroll-mob' : 'rx-m'}
          large={large}
          priority={priority}
        />
      </DeviceFrame>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={stageClass}>
        {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
        {inner}
      </Link>
    );
  }
  return <div className={stageClass}>{inner}</div>;
}
