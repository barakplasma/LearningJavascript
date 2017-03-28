#nodemon --exec "mocha --reporter min am-i-safe-to-drive-spec.js || true"
mocha -w --reporter min am-i-safe-to-drive-spec.js
#forever start --uid foo --killSignal=SIGTERM -c