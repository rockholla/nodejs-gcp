# @rockholla/gcp

An extension of Google Cloud Platform SDK components, functionality and helpers not available through the SDK itself

| Branch    | Status                                                                                                                                               |
| --------  | ---------------------------------------------------------------------------------------------------------------------------------------------------  |
| `develop` | [![Build Status](https://travis-ci.org/rockholla/nodejs-gcp.svg?branch=develop)](https://travis-ci.org/rockholla/nodejs-gcp)                         |
| `master`  | [![Build Status](https://travis-ci.org/rockholla/nodejs-gcp.svg?branch=master)](https://travis-ci.org/rockholla/nodejs-gcp)                          |

## Getting Started

```
npm install --save @rockholla/gcp
```

This package has peer dependencies on Google Cloud SDK packages. Meaning, install only the ones you need. For instance, if you only needed to use this package for its Container/Kubernetes Engine extension capabilities, you could simply install:

```
npm install --save @google-cloud/container
```

Then in your code, something like:

```
import Gcp from '@rockholla/gcp'

let clusterDefinition = {...}
Gcp.kubernetes().ensureCluster('my-cluster', 'us-central1-a', clusterDefinition)
```
