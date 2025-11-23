all: test

test:
	node test.js

format:
	npx prettier@3.6.2 --write *.js
