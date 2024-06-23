module.exports = {
    verbose: true,
    reporters: [
        "default",
        ["jest-html-reporter", {
            "pageTitle": "Test Report",
            "outputPath": "./report/test-report.html",
            "includeFailureMsg": true,
            "includeConsoleLog": true
        }]
    ]
};
