<h1 align="center">
  My portfolio site README.md
</h1>

[![master Actions Status](https://github.com/sania-dsouza/portfolio-site/workflows/Node.js%20CI/badge.svg)](https://github.com/sania-dsouza/portfolio-site/actions)

[![Netlify Status](https://api.netlify.com/api/v1/badges/53ea8587-468b-4024-86dd-01407e90ff87/deploy-status)](https://app.netlify.com/sites/sania-dsouza/deploys)

## To build the site locally ##

1. **Clone the repo into desired folder on your machine**
    ```
    git init
    git clone 
    ```
  
2. **Enter the root directory of the site**
   ```
   cd portfolio-site
   ```
   
3. **Install dependencies**
   ```
   npm install 
   ```
   
4. **Run the dev server**
   ```
   gatsby develop 
   ```
   
5. **View my site at http:localhost:8000** 

## Tools used ##

**Gatsby**: Front-end framework\
**Github**: Project repositories markdown files\
**Cloudinary**: Images for Gallery\
**Medium**: Articles on markdown\
**Cypress** : E2E integration tests\
**Github Actions**: CI\
**Netlify**: Deploy

## Deploy on GH Pages ##
   ```
   git checkout gh-pages
   git rebase master
   npm run deploy
   ```
