#!/bin/sh
rm -rf build
npm run build
cp -r nature build/
cp -r threats build/
cd ./build
surge . hirako-ngraph.surge.sh
