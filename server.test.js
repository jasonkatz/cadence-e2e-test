const { describe, it, after, before } = require("node:test");
const assert = require("node:assert");
const server = require("./server");

describe("GET /hello", () => {
  before(() => {
    return new Promise((resolve) => {
      server.listen(0, resolve);
    });
  });

  after(() => {
    return new Promise((resolve) => {
      server.close(resolve);
    });
  });

  it("returns 200 with Hello, World!", async () => {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/hello`);
    assert.strictEqual(res.status, 200);
    const body = await res.text();
    assert.strictEqual(body, "Hello, World!");
  });

  it("returns 404 for unknown paths", async () => {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/unknown`);
    assert.strictEqual(res.status, 404);
  });
});
