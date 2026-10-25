/* Optical sizing for wordmarks, shared by the logo row and the results table.
   A long wordmark set to the same pixel height as a compact one occupies far
   more area and reads as more important, so each mark gets the height that
   equalises its area: `h = base / sqrt(ratio / REF_RATIO)`, clamped so a
   near-square mark cannot tower over its neighbours. `ratio` is the width ÷
   height of the mark's ink — see `CustomerBrand` in lib/content.ts. */

/** The proportion at which a mark is drawn at exactly `base` height. */
export const REF_RATIO = 3.5;

export type LogoSizing = { base: number; min: number; max: number };

export const opticalHeight = (ratio: number | undefined, { base, min, max }: LogoSizing): number =>
  Math.max(min, Math.min(max, Math.round(base / Math.sqrt((ratio ?? REF_RATIO) / REF_RATIO))));
