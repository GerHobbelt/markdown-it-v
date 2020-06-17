
let path = require('path');

let generate = require('@gerhobbelt/markdown-it-testgen');

describe('markdown-it', function () {
  let md = require('@gerhobbelt/markdown-it')({
    html: true,
    langPrefix: '',
    typographer: true,
    linkify: true,

    highlight(source, lang, slf) {
      slf.sDom.openTag('highlight-component', { source });
    },
    highlightNoWrappingEls: true
  });

  require('./inject')(md);

  generate(path.join(__dirname, 'fixtures/options'), md);
});
