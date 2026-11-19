const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

describe('Google Classroom removal', () => {
  it('does not advertise or register the removed integration', () => {
    ['server.js', 'public/index.html', 'public/slides.html', 'README.md']
      .forEach(file => {
        const source = fs.readFileSync(path.join(root, file), 'utf8');
        assert(!/google classroom|classroom\.html|\/api\/classroom/i.test(source),
          file + ' still references the removed integration');
      });
  });

  it('removes the dedicated page, script and service', () => {
    ['public/classroom.html', 'public/classroom.js',
      'lib/google-classroom-service.js'].forEach(file => {
      assert(!fs.existsSync(path.join(root, file)), file + ' still exists');
    });
  });

  it('does not depend on unused Google OAuth or session packages', () => {
    const dependencies = require('../package.json').dependencies;
    ['googleapis', 'google-auth-library', 'express-session'].forEach(name => {
      assert(!dependencies[name], name + ' is still a dependency');
    });
  });
});
