---
title: Rest your eye with AyeSpy -- Automated visual testing
author: Sania
date: 2021-04-06
---

A lesser known but still useful tool to automate visual testing for your project -- [Aye Spy](https://github.com/newsuk/AyeSpy) can save precious time between development iterations. 

#### Quick facts:
* Requires Selenium Grid to run 
* Inspired by Wraith and Backstop -- both popular visual regression testing tools
* According to its creators, the USP of this tool is its performance improvement over other visual testing tools (runs 40 screenshot comparisons in a minute)

#### A sample test:

* Install Aye Spy
``` 
npm install -g aye-spy
```

* Install the Docker Selenium Grid image (Note that you will need Docker installed on your system already): 

```
docker run -d -p 4444:4444  --name selenium-hub selenium/hub:3.141.59-titanium
docker run -d -P -p 5900:5900 --link selenium-hub:hub -v /dev/shm:/dev/shm selenium/node-chrome-debug:3.141.59-titanium
```

Run these, one after the other. These install images of Selenium Grid and the Chrome browser on the Docker machine, respectively.

* Run `ayespy init` to generate the initial config file. This includes basic test configuration and test scenarios.

This is a sample config file:
![Screen Shot 2021-03-26 at 9.10.29 PM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3nutj9f327q87t132wyk.png)

The _gridUrl_ is a required field and specifies the address of the Docker Selenium grid image running on your computer. That is followed by the folders for baseline, test and difference screenshots respectively. _report_ holds the generated report which is an html file. 
_scenarios_ holds the test scenarios. 

* Run the test 
```
ayespy snap --browser chrome --config ayespy-config.json --run "Home"
```
_Home_ is the scenario label from the config file (ayespy-config.json here) 
This creates a snapshot in a folder `latest`. 
 
![ayespy1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o228aer7vzs12g80nhdo.png)

![Screen Shot 2021-03-26 at 9.17.45 PM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wwdak07sqxix0npimcdc.png)
 
* Save this snapshot as a baseline for further tests:
```
ayespy update-baseline --browser chrome --config ayespy-config.json
```

This updates the `baseline` folder by copying the screenshot taken in the previous step to that folder. 

![ayespy2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o84lfolcoy4l6rnanguj.png)

![ayespy3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gujbxipqch5e7883zhku.png)

* Compare the screenshots by running: 
```
ayespy compare --browser chrome --config ayespy-config.json
```
For a passing test, there would be no difference between the baseline and test screenshots and hence, no screenshot will be saved in the `generatedDiffs` folder. Also, no report would be created in the `report` folder. 

![ayespy4](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6rusu3xp07t6u1418apq.png)

For a failing test however, both folders will be created and have new files illustrating the difference. 

![ayespy5](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4eu9ttea5kzino75oq43.png)
 
The html report is also written to the _report_ file and looks like this:

![ayespy6](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0zv2eqi0rx3ng3mje7c0.png)

#### Wins for Aye-spy: 

* Straight-forward setup 
* Simple documentation
* Support for various viewports 
* AWS S3 support to save images to 
* Screenshots could be taken for multiple branches; this speeds up finding issues. 

#### What needs work:

* In order to run scripts before taking a screenshot, the run must have `selenium-webdriver` and By exposed.
* Safari is not supported
* Does not support switching contexts to iFrames

