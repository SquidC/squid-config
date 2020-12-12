import { Page } from "./page";

/**
 * @id ProjectAdd
 */
export interface ProjectAdd {
  name: string;
  path: string;
}

/**
 * @id ProjectSelect
 */
export interface  ProjectSelect extends Page {
  path?: string
}


