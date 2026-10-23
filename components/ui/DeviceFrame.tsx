import { type CSSProperties, type ReactNode } from 'react';

/**
 * Device frames redrawn from the "Apple Frames" Figma community file (MacBook Pro,
 * iPad Pro, iPhone 14 Pro), at the file's 1x geometry. The screen is a real hole:
 * the content sits underneath, the bezel, notch and camera are drawn on top. The
 * outer edge follows the theme: space grey in dark, silver in light
 * (`--color-device-edge`).
 */
export type DeviceKind = 'laptop' | 'tablet' | 'phone';

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Rounded rectangle as a path; `r` is one radius, or [top, bottom]. */
function rr({ x, y, w, h }: Rect, r: number | [number, number]): string {
  const [t, b] = typeof r === 'number' ? [r, r] : r;
  return [
    `M${x + t} ${y}H${x + w - t}`,
    t ? `A${t} ${t} 0 0 1 ${x + w} ${y + t}` : '',
    `V${y + h - b}`,
    b ? `A${b} ${b} 0 0 1 ${x + w - b} ${y + h}` : '',
    `H${x + b}`,
    b ? `A${b} ${b} 0 0 1 ${x} ${y + h - b}` : '',
    `V${y + t}`,
    t ? `A${t} ${t} 0 0 1 ${x + t} ${y}` : '',
    'Z',
  ].join('');
}

const specs = {
  laptop: {
    w: 2100,
    h: 1265,
    screen: { x: 186, y: 32, w: 1728, h: 1117 },
    screenR: [40, 0] as [number, number],
    // The page starts under the notch; the band above takes the page colour.
    inset: 36,
  },
  tablet: { w: 906, h: 1275, screen: { x: 36, y: 36, w: 834, h: 1202 }, screenR: 58, inset: 0 },
  phone: { w: 413, h: 872, screen: { x: 10, y: 10, w: 393, h: 852 }, screenR: 58, inset: 0 },
} as const;

/** Size of the area the content fills, for the screenshots' scroll distance. */
export const deviceScreens = {
  laptop: { w: 1728, h: 1117 - 36 },
  tablet: { w: 834, h: 1202 },
  phone: { w: 393, h: 852 },
} as const;

const pct = (n: number, of: number) => `${((n / of) * 100).toFixed(3)}%`;

/** `border-radius` of a w×h box with top radius `t` and bottom radius `b`, in %. */
const radius = (t: number, b: number, w: number, h: number) =>
  `${pct(t, w)} ${pct(t, w)} ${pct(b, w)} ${pct(b, w)} / ${pct(t, h)} ${pct(t, h)} ${pct(b, h)} ${pct(b, h)}`;

function Art({ kind }: { kind: DeviceKind }) {
  const edge = 'var(--color-device-edge)';
  if (kind === 'laptop') {
    const s = specs.laptop.screen;
    return (
      <>
        <path
          d={rr({ x: 154, y: 0, w: 1792, h: 1173 }, [66, 0]) + rr(s, [40, 0])}
          fill={edge}
          fillRule="evenodd"
        />
        <path
          d={rr({ x: 162, y: 8, w: 1776, h: 1165 }, [60, 0]) + rr(s, [40, 0])}
          fill="#000"
          fillRule="evenodd"
        />
        <path d="M940 32h220v16a20 20 0 0 1-20 20H960a20 20 0 0 1-20-20z" fill="#000" />
        <path d="M0 1173h2100v40a40 40 0 0 1-40 40H40a40 40 0 0 1-40-40z" fill="#000" />
        <path
          d="M102 1253h120a12 12 0 0 1-12 12h-96a12 12 0 0 1-12-12zM1886 1253h120a12 12 0 0 1-12 12h-96a12 12 0 0 1-12-12z"
          fill="#000"
        />
      </>
    );
  }
  if (kind === 'tablet') {
    return (
      <>
        <path
          d={rr({ x: 0, y: 0, w: 906, h: 1275 }, 86) + rr(specs.tablet.screen, 58)}
          fill={edge}
          fillRule="evenodd"
        />
        <path
          d={rr({ x: 4, y: 4, w: 898, h: 1266 }, 82) + rr(specs.tablet.screen, 58)}
          fill="#000"
          fillRule="evenodd"
        />
        <circle cx="453" cy="20" r="9" fill="#3c3a38" />
      </>
    );
  }
  return (
    <>
      <path
        d={rr({ x: 0, y: 0, w: 413, h: 872 }, 66) + rr(specs.phone.screen, 58)}
        fill={edge}
        fillRule="evenodd"
      />
      <path
        d={rr({ x: 6, y: 6, w: 401, h: 860 }, 62) + rr(specs.phone.screen, 58)}
        fill="#000"
        fillRule="evenodd"
      />
      <rect x="146" y="30" width="122" height="34" rx="17" fill="#000" />
      <circle cx="251" cy="47" r="9" fill="#3c3a38" />
    </>
  );
}

interface DeviceFrameProps {
  kind: DeviceKind;
  /** Page colour shown while the screenshot loads (and in the laptop's notch band). */
  screenBg?: string;
  /** Must position the frame (`relative`, `absolute`…): the screen and art are absolute. */
  className: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function DeviceFrame({ kind, screenBg, className, style, children }: DeviceFrameProps) {
  const spec = specs[kind];
  const s = spec.screen;
  const [rt, rb] = typeof spec.screenR === 'number' ? [spec.screenR, spec.screenR] : spec.screenR;
  // The shadow follows the body only (the lid for the laptop), never the screen.
  const body =
    kind === 'laptop'
      ? { x: 154, y: 0, w: 1792, h: 1173, r: 66 }
      : { x: 0, y: 0, w: spec.w, h: spec.h, r: kind === 'tablet' ? 86 : 66 };
  return (
    <div className={className} style={{ aspectRatio: `${spec.w} / ${spec.h}`, ...style }}>
      <span
        aria-hidden="true"
        className={`absolute ${kind === 'laptop' ? 'shadow-device-lg' : 'shadow-device'}`}
        style={{
          left: pct(body.x, spec.w),
          top: pct(body.y, spec.h),
          width: pct(body.w, spec.w),
          height: pct(body.h, spec.h),
          borderRadius: radius(body.r, kind === 'laptop' ? 0 : body.r, body.w, body.h),
        }}
      />
      <div
        className="absolute overflow-hidden"
        style={{
          left: pct(s.x, spec.w),
          top: pct(s.y, spec.h),
          width: pct(s.w, spec.w),
          height: pct(s.h, spec.h),
          borderRadius: radius(rt, rb, s.w, s.h),
          backgroundColor: screenBg,
        }}
      >
        <div
          className="absolute inset-x-0 bottom-0 overflow-hidden"
          style={{ top: pct(spec.inset, s.h) }}
        >
          {children}
        </div>
      </div>
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${spec.w} ${spec.h}`}
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <Art kind={kind} />
      </svg>
    </div>
  );
}
