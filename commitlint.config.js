module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "build", "docs", "ci", "chore", "style", "revert", "perf", "test", "wip", "types"],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "api",
        "lib",
        "src",
        "model",
        "dao",
        "service",
        "router",
        "package.json"
      ],
    ],
  },
};
