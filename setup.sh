#!/bin/bash

# api-server
pushd api-server
npm ci
popd

# client-dashboard
pushd client-dashboard
npm ci
ln -f -s ../signaling ./node_modules/signaling
popd

# signaling
pushd signaling
npm ci
popd
