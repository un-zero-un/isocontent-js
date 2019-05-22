.PHONY: help

help: ## display this help message
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@yarn

yarn.lock: install

build: yarn.lock ## Compile Typescript to usable javascript
	@./node_modules/.bin/lerna run build

test: yarn.lock ## run test suite
	@yarn -s run test

prettier: ## Run prettier to apply format to code
	@yarn -s run prettier

lint : ## Check codestyle
	@yarn -s run tslint

prepare: install prettier lint build test ## prepare release
