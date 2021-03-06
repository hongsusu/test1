const constant = require('./constantenv');

let account = '';
let form = '';
let cdn = '';
let member = '';
let marketing = '';
let data = '';
let gateway = '';
let order = '';
let finance = '';
let activity = '';
let eventt = '';
let ligthActive = '';
let matchlink = '';
let goods = '';
let coupon = '';
let freight = '';

let api = '';

switch (window.processEnv) {
  case 'testing':
    api = constant.API_TESTING;
    account = constant.ACCOUNT_TESTING;
    form = constant.FORM_TESTING;
    cdn = constant.CDN_TESTING;
    member = constant.MENBER_TESTING;
    marketing = constant.MARKETING_TESTING;
    data = constant.DATA_TESTING;
    gateway = constant.GATEWAY_TESTING;
    order = constant.ORDER_TESTING;
    finance = constant.FINANCE_TESTING;
    activity = constant.ACTIVITY_TESTING;
    eventt = constant.EVENTT_TESTING;
    ligthActive = constant.LIGHT_ACTIVE_TESTING;
    matchlink = constant.MATCHLINK_TESTING;
    goods = constant.GOODS_TESTING;
    coupon = constant.COUPON_TESTING;
    freight = constant.FREIGHT_TESTING;
    break;
  case 'labing':
    api = constant.API_LABING;
    account = constant.ACCOUNT_LABING;
    form = constant.FORM_LABING;
    member = constant.MENBER_LABING;
    marketing = constant.MARKETING_LABING;
    data = constant.DATA_LABING;
    cdn = constant.CDN_LABING;
    gateway = constant.GATEWAY_LABING;
    order = constant.ORDER_LABING;
    finance = constant.FINANCE_LABING;
    activity = constant.ACTIVITY_LABING;
    eventt = constant.EVENTT_LABING;
    ligthActive = constant.LIGHT_ACTIVE_LABING;
    matchlink = constant.MATCHLINK_LABING;
    goods = constant.GOODS_LABING;
    coupon = constant.COUPON_LABING;
    freight = constant.FREIGHT_LABING;
    break;
  case 'production':
    api = constant.API_PRODUCTION;
    account = constant.ACCOUNT_PRODUCTION;
    form = constant.FORM_PRODUCTION;
    cdn = constant.CDN_PRODUCTION;
    member = constant.MENBER_PRODUCTION;
    marketing = constant.MARKETING_PRODUCTION;
    data = constant.DATA_PRODUCTION;
    gateway = constant.GATEWAY_PRODUCTION;
    order = constant.ORDER_PRODUCTION;
    finance = constant.FINANCE_PRODUCTION;
    activity = constant.ACTIVITY_PRODUCTION;
    eventt = constant.EVENTT_PRODUCTION;
    ligthActive = constant.LIGHT_ACTIVE_PRODUCTION;
    matchlink = constant.MATCHLINK_PRODUCTION;
    goods = constant.GOODS_PRODUCTION;
    coupon = constant.COUPON_PRODUCTION;
    freight = constant.FREIGHT_PRODUCTION;
    break;
  default:
    api = constant.API_DEVELOPMENT;
    account = constant.ACCOUNT_DEVELOPMENT;
    form = constant.FORM_DEVELOPMENT;
    cdn = constant.CDN_DEVELOPMENT;
    member = constant.MENBER_DEVELOPMENT;
    marketing = constant.MARKETING_DEVELOPMENT;
    data = constant.DATA_DEVELOPMENT;
    gateway = constant.GATEWAY_DEVELOPMENT;
    order = constant.ORDER_DEVELOPMENT;
    finance = constant.FINANCE_DEVELOPMENT;
    activity = constant.ACTIVITY_DEVELOPMENT;
    eventt = constant.EVENTT_DEVELOPMENT;
    ligthActive = constant.LIGHT_ACTIVE_DEVELOPMENT;
    matchlink = constant.MATCHLINK_DEVELOPMENT;
    goods = constant.GOODS_DEVELOPMENT;
    coupon = constant.COUPON_DEVELOPMENT;
    freight = constant.FREIGHT_DEVELOPMENT;
}

module.exports = {
  NODE_ENV: JSON.parse(constant.NODE_ENV_DEVELOPMENT),
  API: JSON.parse(api),
  GATEWAY: JSON.parse(gateway),
  ACCOUNT: JSON.parse(account),
  FORM: JSON.parse(form),
  MENBER: JSON.parse(member),
  MARKETING: JSON.parse(marketing),
  DATA: JSON.parse(data),
  ORDER: JSON.parse(order),
  CDN: JSON.parse(cdn),
  FINANCE: JSON.parse(finance),
  ACTIVITY: JSON.parse(activity),
  EVENTT: JSON.parse(eventt),
  LIGHTAVTIVE: JSON.parse(ligthActive),
  MATCHLINK: JSON.parse(matchlink),
  GOODS: JSON.parse(goods),
  COUPON: JSON.parse(coupon),
  FREIGHT: JSON.parse(freight),
};
