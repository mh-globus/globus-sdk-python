SDK_VERSION=$(shell grep '^__version__' src/globus_sdk/version.py | cut -d '"' -f2)

# these are just tox invocations wrapped nicely for convenience
.PHONY: lint test docs
lint:
	tox -e lint,mypy,pylint
test:
	tox
docs:
	tox -e docs

.PHONY: showvars release prepare-release
showvars:
	@echo "SDK_VERSION=$(SDK_VERSION)"
prepare-release:
	tox -e prepare-release
	$(EDITOR) changelog.rst
release:
	git tag -s "$(SDK_VERSION)" -m "v$(SDK_VERSION)"
	-git push $(shell git rev-parse --abbrev-ref @{push} | cut -d '/' -f1) refs/tags/$(SDK_VERSION)
	tox -e publish-release

.PHONY: clean
clean:
	rm -rf dist build *.egg-info .tox
