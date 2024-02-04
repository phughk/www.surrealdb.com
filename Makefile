# Copyright © 2016 Abcum Ltd
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

.PHONY: default
default:
	@echo "Choose a Makefile target:"
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print "  - " $$1}}' | sort

.PHONY: clean
clean:
	@echo "Clean..."
	rm -rf node_modules dist tmp

.PHONY: setup
setup:
	@echo "Setup..."
	npm install

.PHONY: tests
tests:
	@echo "Tests..."
	npm test

.PHONY: serve
serve:
	@echo "Serve..."
	FASTBOOT_DISABLED=true npx ember serve

.PHONY: build
build:
	@echo "Build..."
	EXPERIMENTAL_RENDER_MODE_SERIALIZE=true npx ember build -prod

.PHONY: stage
stage:
	@echo "Stage..."
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=31536000, immutable" --exclude ".DS_Store" ./dist/assets s3://www.surrealdb.dev/assets/
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=31536000, immutable" --exclude ".DS_Store" ./dist/static s3://www.surrealdb.dev/static/
	aws s3 cp --region eu-west-2 --cache-control "public, max-age=86400" ./dist/favicon.ico s3://www.surrealdb.dev/
	aws s3 cp --region eu-west-2 --cache-control "public, max-age=86400" ./dist/robots.txt s3://www.surrealdb.dev/
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=300" --exact-timestamps --delete --exclude "*" --include "*.html" ./dist/ s3://www.surrealdb.dev/
	aws s3 cp --region eu-west-2 --cache-control "no-store" ./dist/version.txt s3://www.surrealdb.dev/

.PHONY: deploy
deploy:
	@echo "Deploy..."
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=31536000, immutable" --exclude ".DS_Store" ./dist/assets s3://www.surrealdb.com/assets/
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=31536000, immutable" --exclude ".DS_Store" ./dist/static s3://www.surrealdb.com/static/
	aws s3 cp --region eu-west-2 --cache-control "public, max-age=86400" ./dist/favicon.ico s3://www.surrealdb.com/
	aws s3 cp --region eu-west-2 --cache-control "public, max-age=86400" ./dist/robots.txt s3://www.surrealdb.com/
	aws s3 sync --region eu-west-2 --cache-control "public, max-age=300" --exact-timestamps --delete --exclude "*" --include "*.html" ./dist/ s3://www.surrealdb.com/
	aws s3 cp --region eu-west-2 --cache-control "no-store" ./dist/version.txt s3://www.surrealdb.com/

.PHONY: sitemap
sitemap:
	@echo "Generating sitemap..."
	npx --yes sitemap-generator-cli --priority-map "1.0,0.9,0.8,0.7" https://surrealdb.com
	aws s3 cp --region eu-west-2 --cache-control "public, max-age=30" ./sitemap.xml s3://www.surrealdb.com/
