var config = module.exports;

config["My tests"] = {
    environment: "browser", // or "node"
    sources: [
        "lib/*.js",
        "src/*.js" // Paths are relative to config file
    ],
    tests: [
        "test/*-test.js"
    ],
    extensions: [ require("buster-coverage") ],
    "buster-coverage": {
        outputDirectory: "coverage_reports", //Write to this directory instead of coverage
        format: "lcov", //At the moment cobertura and lcov are the only ones available
        combinedResultsOnly: true, //Write one combined file instead of one for each browser
        coverageExclusions: ["resources"] //Exclude everything with resources in it's path
    }
};