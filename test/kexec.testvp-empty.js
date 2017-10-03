var exec = require('child_process').exec
var path = require('path')
var assert = require('assert')

/* global suite test */

suite('kexec')

test('+ kexec() - kexec echovp - two arguments, empty list', function (done) {
  var echoFile = path.join(__dirname, './files/echovp-empty.js')

  exec(process.argv[0] + ' ' + echoFile, function (error, stdout, stderr) {
    assert(stdout.trim() === '')
    assert(stderr.trim() === '')
    assert(error === null)
    done()
  })
})
