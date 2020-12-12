import { Page } from "./base";

export interface TranslateAdd {
  path: string;
  defaultValue: string;
}

export interface TranslateSelect extends Page {
  path?: string
}

export interface TranslateEdit extends TranslateAdd {
  id: string;
}
