declare namespace API {
  type ResultData = {
    status: number;
    data?: any;
    msg?: string;
  }
  type CaptchaResponse = {
    base64?: string
    key?: string
    md5?: string
  }

  type LoginData = {
    base64: string
    key: string
    md5: string
  }
}
