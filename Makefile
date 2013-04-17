build :
	./node_modules/.bin/cjsify -o public/javascripts/app.js -r modules modules/main.js

setup :
	npm install
