const isProd = process.env.NODE_ENV === "production";

export const BASE_URL = isProd
  ? process.env.REACT_APP_LIVE_API_URL
  : process.env.REACT_APP_LOCAL_API_URL;
