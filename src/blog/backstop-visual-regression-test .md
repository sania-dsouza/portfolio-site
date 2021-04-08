---
title: Prevent visual regression bugs with BackstopJS
date: 2021-04-06
featuredImage: ../images/favicon.png
---

Testing could be a lot of work if you are responsible for the visual (or even functional) feels of a website. And picking out visual differences after seemingly-unrelated code changes could be a pain. [BackstopJS](https://github.com/garris/BackstopJS) is one of the tools that could help automate this bit. 

Following is a short tutorial on how to set up Backstop for your node project. 

#### Quick facts:
* BackstopJS automates visual regression testing of a responsive web UI by comparing DOM screenshots over time.
* It includes an in-browser reporting feature, which allows you to check layout settings for print and screen, test approving, inspection, etc
* Docker rendering for cross-platform tests
* Simulating user interactions using Puppeteer

#### A quick test:

* Install BackstopJS :

``` 
npm install -g backstopjs
```
* Generate a Backstop config file:
``` 
backstop init 
```

The file generated is `backstop.json`. This has some default config settings that Backstop looks for when it runs. 

Some of the important config properties:
* id : used for screenshot naming
* viewports : array of viewport sizes ; at least one must be specified
* scenarios: specifies different user flows for example. Section of the config file is shown below.

![sampleinit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k4s1tclkbthgk8guih6y.png)

This test config file specifies a single scenario. All it does is navigate to the URL against `url`. 

* Run the test 
``` 
backstop test
```

This first test fails since it didn’t find a reference image to compare the test screenshot with. 

![samplefail1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/az8wdmiblr99y06gm574.png)

The report generated on browser (since the ‘report’ property was set to ‘browser’ in the config file) looks like this: 

![samplefailreport1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jmzxq6bdnw39ep1wd80q.png) 

You might've noticed that when you ran `backstop init`, a set of folders was created. One of these was `bitmaps_test`. This folder holds the test screenshots. 

![Screen Shot 2021-03-22 at 1.00.58 PM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nid90k4wt7i7ux73jioa.png)

* To make a test file the reference for future tests, run:
``` 
backstop approve
```
This 'approves' the previous test screenshot as a standard or reference to compare future test screenshots with. It copies the screenshot from the `bitmaps_test` folder to the `bitmaps_reference` folder. 

![samplereference1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/377iddgi0wu1w6x3b8p4.png)

* Run the test again: 
```
backstop test
```

This time, the test passes. 

![samplepass1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6zik4ftd7xpgt86gjhuf.png)

The corresponding browser report: 

![samplepassreport1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ysa8fi1hi1e6i72o0uh7.png)
  
#### Another test(with user interaction)

Puppeteer is used to simulate user scenarios. 
Add another scenario to the `scenarios` array in the config file:
```
...
"scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": "backstop_data/engine_scripts/cookies.json",
      "url": "https://garris.github.io/BackstopJS/"
    },
     {
       "label": "BackStopJS Interaction scenario",
       "url": "https://garris.github.io/BackstopJS/",
       "clickSelector": ".cta"
     }
  ],
...
```
Here, the URL as specified by `url` is opened and when the element specified by the selector `clickSelector` is available, it is clicked; and then Backstop takes a screenshot. 

The first time you run `backstop test`, the test will fail as it doesn't find the reference image. Run `backstop approve` and `backstop test` like before to get your test to pass. 

In my test, this second test fails as well because of a difference between the reference and the test screenshot. This is indicated by the hot pink text on the difference screenshot.

![samplefailreport2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9n26o10gsb391yz3z8ok.png)

At this point, I could either fix what changed in the code or  update my reference using `backstop approve`. 

Backstop also has a scrubber utility that displays the difference between the reference and test screenshots by moving a mapper cursor, which is pretty intuitive. 

![samplescrubber](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ghaaapiqo1kk63ywpmd1.png) 

You could automate more complex user flows, add more viewports, tune performance and other good stuff using Backstop; their documentation is great and they have a healthy user base also.

#### Backstop niceties:

* Easy to set-up
* Good support for various viewports and Docker integration in case of cross-platform issues
* Intuitive reporting and inspection 
* Easy Puppeteer scripts to simulate user interaction
* Variable image difference sensitivity 

#### Not a con, but a housekeeping task:

Outdated screenshots will have to be cleared manually or pushed to a `.gitignore` file to ensure they don't make it into the remote repo.


_PS: If you are anything (read curious) like me, that cutie on the Backstop logo is a ring-tailed lemur ;)._

