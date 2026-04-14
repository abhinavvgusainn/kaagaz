const CALENDLY_API_BASE = "https://api.calendly.com";

const requiredEnv = (name: "CALENDLY_PERSONAL_ACCESS_TOKEN" | "CALENDLY_EVENT_TYPE_URI") => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
};

export const getCalendlyConfig = () => ({
  apiBase: CALENDLY_API_BASE,
  personalAccessToken: requiredEnv("CALENDLY_PERSONAL_ACCESS_TOKEN"),
  eventTypeUri: requiredEnv("CALENDLY_EVENT_TYPE_URI"),
  locationKind: process.env.CALENDLY_LOCATION_KIND,
});

export const getCalendlyHeaders = () => {
  const { personalAccessToken } = getCalendlyConfig();

  return {
    Authorization: `Bearer ${personalAccessToken}`,
    "Content-Type": "application/json",
  };
};
