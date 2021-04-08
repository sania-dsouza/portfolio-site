---
title: Test for visual regression with Jest-image-snapshot
author: Sania
date: 2021-04-06
featuredImage: ../images/favicon.png
---

Jest has a feature called snapshot testing where a serializable value for the React tree is generated and then compared with a reference snapshot to check for differences.

However, this article focuses instead on the more visual screenshot comparison that is provided by the [jest-image-snapshot](https://www.npmjs.com/package/jest-image-snapshot) package. 

#### Quick facts:

* It's a Jest matcher that performs image comparisons using pixelmatch 
* jest-image-snapshot will not work with anything below Jest 20.x.x
* Could add a Gaussian blur for noise
* Once the snapshot is taken, it works exactly the same as Jest snapshots

#### Sample test:

_This test assumes you have Jest installed and have basic Jest know-how. The project was built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). After this initial set-up, follow the steps below for visual testing goodness._

* Install the package : 
```
npm i --save-dev jest-image-snapshot
```

* Also install Puppeteer for user interaction
```
npm install puppeteer
```

* Test script: 

```
import { toMatchImageSnapshot } from 'jest-image-snapshot';
const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });


it('CreateReactApp home', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
})
```

* Run the test the first time: 
```
npm run test
``` 
This test opens the page running on the localhost, takes a snapshot and saves it in the folder `_image_snapshots_`.  

![jest2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4uu7fv6rxrgbdoxx6maq.png)
![jest3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l65kr2m563q7iukyz07j.png)

The screenshot:

![jest4](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0mp3kbevpmp49e9thjvf.png)

* Make a change in the source code and re-run the test. 
The test fails this time. 

![jest5](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/s9k869xbf8iyf2jlx7ma.png)

Another sub-folder is created by the name `_diff_output_`.

![jest6](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nbh43wz1vc3rziemnf0g.png)

The difference between the snapshot and the reference snapshot is shown marked: 

![jest7](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uyx3jx7pobpt6v9tc0j4.png)

This is a simple test. You could simulate more complicated user flows and take screenshots of sections of pages rather than full pages also. 

#### The good stuff:

* Easy setup once Jest is installed 
* Follows the Jest scaffolding of tests and can easily be integrated with existing functional tests 
* Multiple configuration options from the API
* Could set image difference sensitivity percentage 

#### Other things:

* No support for Typescript
* Outdated reference snapshots have to be removed manually and do not get cleared by using the `-u` flag of Jest. There is an environment variable that can be set up to remove the outdated snapshots but this utility must be used with caution. 
