const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://sociofy-v1.herokuapp.com";

module.exports = baseUrl;
