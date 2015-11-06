Package.describe({
  summary: "OpenLayers 3: an open-source library to render maps from multiple sources on the web",
  version: "3.10.1",
  name: "geekdenz:ol3",
  git: "https://github.com/geekdenz/meteor-ol3.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use("mizzao:build-fetcher@0.2.0");
  api.addFiles(['ol3.fetch.json'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use("mizzao:build-fetcher@0.2.0");
  api.use('geekdenz:ol3');
  api.addFiles('tests.js');
});
