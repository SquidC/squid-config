import { Page } from "./base";

export interface route {
  path: string;
  meta: any;
  children?: route[];
}

export interface RouteAdd {
  project: string;
  version: string;
  route: route[];
}

export interface RouteSelete extends Page {
  projectId?: string;
  version?: string;
}

export interface RouteEdit extends RouteAdd {
  id: string;
}
