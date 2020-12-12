import { Dels, Page } from "./base";

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

export interface RouteDels {
  version: string; // 只能一个版本一个版本的删
}
