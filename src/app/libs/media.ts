const mediaQueries = {
  desktop: 1440,
  personal: 1200,
  laptop: 1024,
  tablet: 768,
  mobile: 500,
} as const;

type MediaQueriesName = keyof typeof mediaQueries;
type Media = Record<MediaQueriesName, string>;

const createMediaQuery = (width: number) => `
  @media (min-width: ${width}px)
`;

/**
 * acc: Media -> initialValue -> {} as Media
 * [key: string, value: number] -> currentValue -> mediaQueries
 */
export const media = Object.entries(mediaQueries).reduce((acc, [key, value]) => {
  acc[key as MediaQueriesName] = createMediaQuery(value);
  return acc;
}, {} as Media);
