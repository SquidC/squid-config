import { Page } from "./base";

export interface ProjectAdd {
  name: string;
  path: string;
}

export interface  ProjectSelect extends Page {
  path?: string
}

export interface ProjectEdit extends ProjectAdd {
  id: string;
}
