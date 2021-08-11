#!/usr/bin/env node

import program from 'commander';
import log from '@zppack/log';
import pkg from '../package.json';
// import main from '.';

program.version(pkg.version, '-v, --version');

// TODO: add cli options and arguments and command and so on
//
// program.argument(
// program.options(
// program.command(
// ...

program.parse(process.argv);

// const opts = program.opts();
//
// TODO: execute code here directly
// main(opts);
