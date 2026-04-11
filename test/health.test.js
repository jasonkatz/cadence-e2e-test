const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../index');

describe('GET /health', () => {
  it('returns 200 with status ok and a valid timestamp', async () => {
    const res = await request(app).get('/health');

    assert.strictEqual(res.status, 200);
    assert.ok(res.headers['content-type'].includes('application/json'));
    assert.strictEqual(res.body.status, 'ok');
    assert.ok(res.body.timestamp);
    assert.ok(!isNaN(Date.parse(res.body.timestamp)));
  });

  it('returns a timestamp that changes between requests', async () => {
    const res1 = await request(app).get('/health');
    const res2 = await request(app).get('/health');

    assert.ok(Date.parse(res1.body.timestamp) <= Date.parse(res2.body.timestamp));
  });
});
