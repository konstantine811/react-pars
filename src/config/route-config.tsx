export const RoutePath = {
  HOME: "/",
  ORACLE: "/oracle",
} as const;

export type RoutePath = (typeof RoutePath)[keyof typeof RoutePath];
