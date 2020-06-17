
let path = require('path');

let generate = require('@gerhobbelt/markdown-it-testgen');

describe('markdown-it', function () {
  let md = require('@gerhobbelt/markdown-it')({
    html: true,
    langPrefix: '',
    typographer: true,
    linkify: true
  });

  require('./inject')(md);

  generate(path.join(__dirname, 'fixtures/markdown-it'), md);
});
