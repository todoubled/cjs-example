.PHONY: setup

# Run the commonjs-everywhere binary installed locally in the project's node_modules with options:
# - dump the final output to `public/javascripts/app.js`
# - set `modules` as the root directory for require statements, so require paths don't have to be relative
# - use `modules/main.js` as the point of entry. All dependencies are traced from here.
build :
	./node_modules/.bin/cjsify -o public/javascripts/app.js -r modules modules/main.js

setup :
	npm install
