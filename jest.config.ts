/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
