all: test

test:
	node test.js

lint:
	npx prettier@3.6.2 *.js

format:
	npx prettier@3.6.2 --write *.js
