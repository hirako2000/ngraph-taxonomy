#!/bin/sh
rm -rf static-server
npm run build
cd ./static-server
surge . hirako-ngraph.surge.sh
