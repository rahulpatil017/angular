/***************Enum Constants***************/

export enum AppEnv {
  Local = 'local',
  Dev = 'development',
  Stage = 'stage',
  QA = 'qa',
  Production = 'production'
}

export enum HttpHeader {
  ContentType = 'Content-Type',
  ApiKey = 'x-api-key',
  Token = 'access-token'
}

export enum ErrorNotificationType {
  Toast = 'TOASTER',
  Page = 'PAGE',
  Modal = 'MODAL'
}

export enum ErrorConfig {
  SysErrId = 'SYS100',
  BadRequestId = 'SYS400',
  NotFoundId = 'SYS404',
  PreconditionRequiredId = 'SYS428',
  TimeoutId = 'UI408'
}

export enum CacheDuration {
  Default = 60 * 60 * 2,
  TwoHour = 60 * 60 * 2,
  OneDay = 60 * 60 * 24
}

export enum Configuration {
  API_KEY = 'apiKey',
  UNDER_MAITENANCE = 'appDown',
  USER_API_ENDPOINT = 'userApiEndpoint',
  CONFIG_API_ENDPOINT = 'configApiEndpoint',
  ORDER_API_ENDPOINT = 'orderApiEndPoint',
  AUTH_API_ENDPOINT = 'authApiEndPoint',
  LOGIN_API_ENDPOINT = 'loginApiEndPoint'
}

export enum LogLevel {
  TRACE = 'TRACE',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  LOG = 'LOG',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
  OFF = 'off'
}

export enum EncDecAlgo {
  AES = 'AES',
  DES = 'DES',
  TripleDES = 'TripleDES',
  RC4 = 'RC4',
  RC4Drop = 'RC4Drop',
  Rabbit = 'Rabbit',
  RabbitLegacy = 'RabbitLegacy',
  EvpKDF = 'EvpKDF'
}

export enum ButtonTheme {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Default = 'btn-default'
}

export enum CancelOperation {
  Cancel = 1,
  UndoCancel = 2,
  None = 3
}

export enum ModalReasons {
  Yes = 'YES',
  No = 'No',
  Cancel = 'CANCEL',
  Close = 'CLOSE'
}

export enum ModalActions {
  Yes = 'Yes',
  No = 'No',
  Cancel = 'Cancel',
  ConfirmSubmit = 'Yes, Submit',
  ConfirmCancel = 'No, Stay'
}

export enum DatePickerPlacement {
  Default = 'bottom',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export enum Operation {
  Create = 1,
  Detail = 2
}

export enum FilterType {
  Default = 'StartsWith',
  StartsWith = 'StartsWith',
  Contains = 'Contains'
}

export enum SortDirection {
  Default = 'asc',
  Asc = 'asc',
  Desc = 'desc'
}

export enum SignOutReason {
  Default = 1,
  Timeout = 2,
  SessionExpired = 3
}

/***************Enum Constants***************/

export class AppConstant {

}

export const AppMessages = {
  
};

export const HttpStatusCode = {
  Timeout: -1,
  NoContent: 204,
  UnAuthorized: 401,
  BadRequest: 400,
  NotFound: 404,
  PreconditionRequired: 428
};

export const Regex = {
  RestrictSpecialChars: /[^A-Za-z0-9:;<=>?\^{}|~!'#$%&'()*+,.`_@\-\[\]\/\\ ]/g,
  AlphaNumericOnly: /^[a-zA-Z0-9 ]*$/,
  Password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-!"#\$%\&'\(\)*+,./:;<=>\?@\[\]])(?=\S+$).{6,}$/,
  Email: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}',
  Phone: /[0-9]{10}/,
  Date: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/
};


export const DateFormat = {
  Default: 'M/DD/YYYY h:mm:ss A',
  MMDDYYYY: 'MM/DD/YYYY',
  YYYYMMDD: 'YYYY-MM-DD',
  MMDDYYYYHMMA: 'MM/DD/YY h:mm A'
};
