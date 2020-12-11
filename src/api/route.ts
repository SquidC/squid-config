import { Page } from "./page";

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
 * @id RouteSelete
 */
export interface RouteSelete extends Page {
  projectId?: string;
  version?: string;
}
