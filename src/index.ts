#!/usr/bin/env node

import sade from "sade";
const pkg = require("../package.json");

const prog = sade("tspackagr");

prog.version(pkg.version);

prog
  .command("create <package>")
  .describe("Create a new package.")
  .example("create mypackage")

  .option("-o, --output", "Change the name of the output file", "bundle.js")
  .example("build src build --global --config my-conf.js")
  .example("build app public -o main.js")
  .action((src, dest, opts) => {
    console.log(`> building from ${src} to ${dest}`);
    console.log("> these are extra opts", opts);
  });

prog.parse(process.argv);
