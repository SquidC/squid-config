import { Page } from "./page";

/**
 * @id TranslateAdd
 */
export interface TranslateAdd {
  path: string;
  defaultValue: string;
}

/**
 * @id TranslateSelect
 */
export interface TranslateSelect extends Page {
  path?: string
}
