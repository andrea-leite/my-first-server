import { getApiInfo, getHealthStatus } from "../services/app.services.js";

export const getApiInfoController = (req, res) => {
  const info = getApiInfo();

  res.send(info);
};

export const checkHealthController = (req, res) => {
  const healthData = getHealthStatus();
  res.json(healthData);
};
