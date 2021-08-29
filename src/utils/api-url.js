export const serverUrl = `${process.env.VUE_APP_TYPE}://${process.env.VUE_APP_ADDR}:${process.env.VUE_APP_PORT}`;
export const apiUrl = '/api/v1';
export const fullUrl = `${serverUrl}${apiUrl}`;

export const environmentType = `${process.env.VUE_APP_ENVIRONMENT}`;
export const requireRecaptcha = `${process.env.VUE_APP_REQUIRE_RECAPTCHA}`;

export const nodesUrl = {
    users: `${fullUrl}/users`,
    login: `${fullUrl}/authorization`,
    logout: `${fullUrl}/authorization`,
    tokenValidation: `${fullUrl}/users/validate`,
    logs: `${fullUrl}/logs`,
    numberOfLogs: `${fullUrl}/logs/number`,
    utilization: `${fullUrl}/utilization`,
    utilizationLastDay: `${fullUrl}/utilization/lastDay`,
    utilizationCurrent: `${fullUrl}/utilization/current`
};