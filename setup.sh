#!/bin/bash

# api-server
pushd api-server
npm ci
popd

# client-dashboard
pushd client-dashboard
npm ci
pushd node_modules
ln -f -s ../../signaling ./signaling
popd
popd

# mgr-dashboard
pushd mgr-dashboard
npm ci
pushd node_modules
ln -f -s ../../signaling ./signaling
popd
popd

# signaling
pushd signaling
npm ci
popd
