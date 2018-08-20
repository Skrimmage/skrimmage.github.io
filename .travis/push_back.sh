#!/bin/bash

setup_env() {
  # skip if build is triggered by pull request
  if [ $TRAVIS_PULL_REQUEST == "true" ]; then
    echo "This is a PR, exiting"
    exit 0
  fi

  # enable error reporting to the console
  set -e
}

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

build_files() {
  # build with Jekyll into "_site"
  bundle exec jekyll build
}

commit_site() {
  git checkout master
  git add . _site
  git commit --message "Automated Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add back_home https://${GH_TOKEN}@github.com/skrimmage/skrimmage.github.io.git > /dev/null 2>&1
  git push --quiet --set-upstream back_home master
}

setup_env
setup_git
build_files
commit_site
upload_files
