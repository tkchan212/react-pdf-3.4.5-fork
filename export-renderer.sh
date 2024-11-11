#!/bin/bash

# Build renderer package
lerna run build --scope @react-pdf/renderer

# Navigate to renderer package, create tarball, and move to root
cd packages/renderer
npm pack
mv react-pdf-renderer-*.tgz ../../react-pdf-renderer.tgz