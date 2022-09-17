// Fixes Firebase imports for Jest tests.
// More info: https://thymikee.github.io/jest-preset-angular/docs/guides/troubleshooting/#resolver-needed-for-some-javascript-library-or-nested-dependencies
module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: (pkg) => {
      const pkgNamesToTarget = new Set(['firebase', '@firebase/util']);

      if (pkgNamesToTarget.has(pkg.name)) {
        delete pkg['exports'];
        delete pkg['module'];
      }

      return pkg;
    },
  });
};
