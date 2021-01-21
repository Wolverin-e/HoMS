#!/bin/bash

# api-server
pushd api-server
rm -rf ./node_modules
popd

# client-dashboard
pushd client-dashboard
rm -rf ./node_modules
rm -rf ./build
popd

# signaling
pushd signaling
rm -rf ./node_modules
popd
