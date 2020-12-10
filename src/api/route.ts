
export interface route {
  path: string;
  meta: any;
  children?: route[];
}

/**
 * @id RouteAdd
 */
export interface RouteAdd {
  project: string;
  route: route[];
}

/**
 * @id RouteFirst
 */
export interface RouteFirst {
  path?: string
}
