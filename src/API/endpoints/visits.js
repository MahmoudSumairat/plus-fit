import http from "../../http/http";
import { reportVisitRoute } from "../routes/visits";

export const reportVisitAPI = () => {
  return http.get(reportVisitRoute());
};
