---
title: Artillery -- Quick check your site's  performance 
date: 2021-04-06
featuredImage: ../images/favicon.png
---

Jmeter is a great performance testing tool but has a steep learning curve and could take long to set up. Sometimes, there is just not enough time for that. Come in [Artillery](https://artillery.io/) !

#### Quick facts:

* Scripts written in YAML: which greatly reduces the code knowledge you need to have to set up tests. 
* Designed for testing backend systems, such as API services, e-commerce backends, chat systems, game backends, databases, message brokers and queues, and anything else that can be communicated with over a network.
* Can't test frontends
* Two options: Artillery Core (free) and Artillery Pro (paid) 
* Functional and load testing could be performed in one package
* Artillery Pro is used to run the performance tests on the Cloud i.e., AWS.

#### Simple installation using NPM:

```
npm install -g artillery@1.6
```

#### A sample test 

This test (let's say it's called test-artillery.yml) :

* runs against the URL: https://blazedemo.com/, 
* follows a phased ramp-up/ramp-down set of steps: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _Warm-up_ : creates 1 virtual user each second for 5 seconds
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _Ramp-up_ : creates 1 virtual user per second ramping up to 5 virtual users per second for 1 minute (60 seconds)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _Ramp-down_ : ramps down the number of concurrent virtual users to 0 over 15 seconds

* asserts the aggregate p95 (95th percentile) latency is 200ms or less, and that the maximum error rate was less than 1%. 
* includes a scenario which is used to test a virtual user flow 

```
config :
  target: "https://blazedemo.com/"
  plugins: 
    expect : {}
  phases:
    - duration: 5
      arrivalRate : 1
      name : Warm-up
    - duration: 60 
      arrivalRate: 1
      rampTo: 5
      name: Ramp up load
    - duration: 15
      arrivalRate: 1
      rampTo: 0
      name: Kill
  ensure:
    p95: 200
    maxErrorRate: 1
scenarios:
  - name: 'test scenario'
    flow:
      - get: 
          url: "/vacation.html"
          expect: 
            - statusCode: 200
      - think: 2
```

#### Run the test

```
artillery run test-artillery.yml
```

#### A section of the full console output

![Screen Shot 2021-03-18 at 12.41.11 PM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mh8lai07vjg1dsdmdkru.png)
 
Console output is not the most easily understood report of results so Artillery has a built-in html reporting feature which is easier on the eyes. 

First, create the report:
```
artillery run --output report.json test-artillery.yml
```

#### Sample JSON generated

![Screen Shot 2021-03-18 at 8.46.42 PM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a9fgh2an0eikt8tnx6pd.png)
 
Next, display that JSON as HTML:
```
artillery report --output report.html report.json
```

#### Sample HTML report 

{% vimeo 525887824 %}
There is a ton of other stuff that Artillery can do including more complex user scenarios, running large-scale load tests, adding synthetic traffic in production to maintain a margin of safety against traffic spikes etc. 
This post only skimmed over Artillery Core; Artillery Pro which is a paid service, provides a seamless upgrade path from tests running on a developer’s machine, to scaling up & running the same test scripts from your organization’s AWS account.

#### What's to like about Artillery

* Scripts written in YAML; easy to learn
* Easy to setup and good documentation
* Good starting point for performance evaluation

#### What could improve 

Could do with more options for reporting; it currently supports Datadog (via agent or HTTP API), StatsD and InfluxDB with Telegraf + StatsD plugin while others like Prometheus are in progress.

Happy testing! 

