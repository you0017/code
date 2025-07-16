import request from "@/utils/request";

export function getImgCode() {
  return request.get('/captcha/image');
}

export function getSmsCode(captchaCode,captchaKey,mobile) {
  return request.post('/captcha/sendSmsCaptcha', {
    captchaCode: captchaCode,
    captchaKey: captchaKey,
    mobile: mobile
  });
}

export function login(smsCode,mobile) {
  return request.post('/passport/login', {
    form: {
      smsCode,
      mobile,
      isParty: false,
      partyData: {}
    }
  });
}
