import { describe, it } from 'mocha';

import { expect } from 'chai';
// import fs from 'fs';

describe.skip('First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe.skip('index.html', () => {
  it('should have h1 that says Users', (done) => {
    // const index = fs.readFileSync('./src/index.html', 'utf-8');
    // const { window } = new JSDOM(index);
    // const h1 = window.document.getElementsByTagName('h1')[0];
    // expect(h1.innerHTML).to.equal('Users');
    done();
    // window.close();
  });
});
