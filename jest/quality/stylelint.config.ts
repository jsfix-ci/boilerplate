export { Config } from '@jest/types'

const config = {
    runner: "jest-runner-stylelint",
    displayName: "lint:css",
    rootDir: "../../",
    moduleFileExtensions: ["css"],
    testMatch: ["<rootDir>/src/**/*.css"]
};

export {
    config as default,
}
