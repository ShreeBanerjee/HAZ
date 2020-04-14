import ConstantData from '@providers/json/constants.json';

// INFO: Contains all module names. Used to load templates.
export const Modules = ConstantData.modules;

// INFO: Contains all error codes
export const Errors = ConstantData.errors;


// INFO: Contains all routes names
export const RouteNames = ConstantData.routes;

export const Paths = {
  assets: { images: `assets/$TENENT/images` }
};

export class Constants {
  public static get fileName() { return ConstantData.fileName; }

  public static get status() { return ConstantData.status; }

  public static ALL_VISA_TYPES = 'ALL';

  // TODO: Remove 'ALL_VISA_TYPES' and use ALL everywhere
  public static ALL = 'ALL';
}
