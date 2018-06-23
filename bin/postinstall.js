#!/usr/bin/env node
'use strict';

console.log(`  The gcpe package has peer dependencies based on what you actually want to use in the package.
  For example, if you wanted to use gcpe only for Google Compute operations, you could just install @google-cloud/compute
  and ignore the rest of the peer dependencies.

  See the @google-cloud npm package for more details on installing Google Cloud SDK components separately:
  https://www.npmjs.com/package/google-cloud
`);
