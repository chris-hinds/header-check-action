const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");
const { path } = require("ramda");

async function run() {
  try {
    // Action Inputs
    const urlToTest = core.getInput("urlToTest");
    const expectedHttpHeader = core.getInput("expectedHttpHeader");
    const expectedHttpHeaderValue = core.getInput("expectedHttpHeaderValue");

    const { headers } = await axios.get(urlToTest);

    const expectedHeader = path([expectedHttpHeader], headers);

    if (!expectedHeader) throw new Error(
        `${expectedHttpHeader}: Not found in the HTTP response headers for ${endpointToTest}`
      );

    if (expectedHeader === expectedHttpHeaderValue) {
      core.setOutput("success", true);
      return;
    }

    throw new Error("Something went wrong");
  } catch (error) {
    core.setOutput("success", false);
    core.setFailed(error.message);
  }
}

run();
