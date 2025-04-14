export default {
    default: {
      require: ["src/steps/**/*.ts"],
      publishQuiet: true,
      format: ["pretty"],
      paths: ["src/features/**/*.feature"],
      worldParameters: {
        apiBaseURL: "https://example.com/api"
      }
    }
  };