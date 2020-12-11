
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
  version: string;
  route: route[];
}

/**
 * @id RouteFirst
 */
export interface RouteFirst {
  projectId?: string;
  version?: string;
}
