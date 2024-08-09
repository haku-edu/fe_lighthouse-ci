module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000", "http://localhost:3000/contact"],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
    server: {},
  },
};
