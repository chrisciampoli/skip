#!/bin/sh
 
ssh app@APP.SERVER.IP.ADDRESS <<EOF
  cd ~/skip
  git pull
  npm install --production
  forever restartall
  exit
EOF