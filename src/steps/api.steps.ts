import { Given, When, Then } from "@cucumber/cucumber";
import { request } from "playwright";
import { strict as assert } from "assert";

let response: any;

Given("I set the API endpoint to {string}", async function (endpoint: string) {
  this.endpoint = endpoint;
});

When("I make a GET request", async function () {
  const apiContext = await request.newContext();
  response = await apiContext.get(this.worldParameters.apiBaseURL + this.endpoint);
});

Then("the response status should be {int}", async function (statusCode: number) {
  assert.equal(response.status(), statusCode);
});

Then("the response should contain a list of users", async function () {
  const responseBody = await response.json();
  assert.ok(Array.isArray(responseBody), "Response body is not an array");
});