#! /usr/bin/env node
var shell = require("shelljs");
shell.exec("tsc");
shell.exec("node dist/index.js");