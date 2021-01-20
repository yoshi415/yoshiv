#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJson = require("./package.json");

welcome({
  title: pkgJson.name,
  tagLine: "Hey, nice to meet you",
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: "#FADC00",
  color: "#000",
  bold: true,
  clear: true,
});

console.log(`
Yoshio Varney
`);
