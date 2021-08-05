---
title: How to use environment variables at build using Github Actions
date: 2021-04-06
featuredImage: ../images/favicon.png
---

I recently ran into an issue when I needed to apply a continuous integration pipeline to my Gatsby portfolio site on Github. Github Actions seemed like a natural choice due to its ease of set-up. I used their readymade Node workflow action. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/7zvksw7cg9zq2zhbfhm1.png)

Setting it up this way creates a .yml file that is then directly added to your root directory on your repository on the `.github/workflows` path. 

This is what it initially looks like. 

```
name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x, 15.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```


**My problem:**

My site uses the Github API to pull my repos from my Github account. For this, I needed a personal access token. See how to create one [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). This value was placed in a .env file on my root folder which was ignored and not sent to Github (via a .gitignore file). This was for obvious security reasons. 

As a result, my workflow would fail at build when I pushed code, since the Github API couldn't find the key it needed to build the page. 

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ypc24agj6431r95kfd7k.png)


**Solution:**

The way to get around this was to make the environment variable in my .env to be available to the build without risking security. 

For this, I used an action [Create .env file](https://github.com/marketplace/actions/create-env-file) which created an .env file at build and had a scope that would expire at build completion. 

```
# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: Node.js CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [13.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}

    - name: Create .env file
      uses: SpicyPizza/create-envfile@v1
      with:
        envkey_GITHUB_LOGIN: "sania-dsouza"
        envkey_GITHUB_PERSONAL_ACCESS_TOKEN: ${{ secrets.SECRET_KEY }}

    - run: npm ci
    - run: npm run build
    - run: npm test
```
GITHUB_PERSONAL_ACCESS_TOKEN is the name of the key that the Github API is expecting to use in my code. 

I used the Secrets option on my repo to save the said token and referred to that secret (SECRET_KEY) in the .yml as above. Remember to not use GITHUB_ as a prefix while naming your secrets as those are reserved. 
Read [this] (https://docs.github.com/en/actions/reference/encrypted-secrets) for how to set secrets in Github. 

The result -- a passing build !
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8elcsoliflim9up21yk3.png)


Another solution would be to manually create a .env file at build (touch .env, push those environment variables to the file, cat .env). 

Hope this alleviates some of the pain in setting up a secure Github Actions pipeline for you. :) 



