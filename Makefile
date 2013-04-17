build :
	./node_modules/.bin/cjsify -o public/javascripts/app.js -r components components/main.js

setup :
	npm install
