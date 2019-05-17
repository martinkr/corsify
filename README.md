# corsify [![Build Status](https://travis-ci.org/martinkr/corsify.svg?branch=master)](https://travis-ci.org/martinkr/corsify)
A tiny transparent proxy. The benefit: it adds the CORS-headers! Why? It prevents Cross Domain Errors.

Try it: [http://corsify.me](http://corsify.me)
- Without CORS-headers: [http://shaky-library.surge.sh](http://shaky-library.surge.sh)
- With CORS-headers aka "corsyfied": [http://corsify.me/http://shaky-library.surge.sh](http://corsify.me/http://shaky-library.surge.sh)

## CORS-i-fy? What is this all about?
 > Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the resource originated. [https://en.wikipedia.org/wiki/Cross-origin_resource_sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

## Wait… What?!
Your script from http://rebel-mother.surge.sh makes an AJAX-request to http://shaky-library.surge.sh. <br/>
You see the infamous "XMLHttpRequest cannot load http://shaky-library.surge.sh. Origin http://rebel-mother.surge.sh is not allowed by Access-Control-Allow-Origin." error message.

## corsify to the rescue!
Change your AJAX-Request from http://shaky-library.surge.sh to http://corsify.me/http://shaky-library.surge.sh. Et voilá: no more errors.

## So simple?
For now: yes.
But please, talk to the http://shaky-library.surge.sh's admin. I highly doubt you want to route all your requests through a third-party-service. Privacy and security, you know…

## Roll our own!
You can just ``` $ git clone https://github.com/martinkr/corsify.git``` the repository and fire up your own local instance.

### With the included Dockerfile
Fast and clean. No additional files on your machine.
- Build the image: ```$ docker build -t corsify:latest . ```
- Start the container: ```$ docker run -p 3001:3000 corsify:latest```
- Go to: [http://localhost:3001](http://localhost:3001)

Uses ``` alpine:3.6``` and ```node:8.4.0```.


### Directly on your machine:
Fast and easy, but all those node_modules…
- Install dependencies ```$ npm install``` or ```$ yarn ```
- Build the files and start server ```$ npm start``` or ```$ yarn start ```
- Go to: [http://localhost:3000](http://localhost:3000)

Requires ```nodejs```. Recomended: ```v8.4.0```, but it might work with older versions too.

# Tech Stack
- ECMAScript 2015 on ```nodejs v8.4.0```
- Rendering ```Mustache v2.3.0``` templates
- CSS 3 piped through ```postcss-cli v4.1.1``` with ```cssnano v3.10.0``` and ```cssnano-preset-advanced v4.0.0-rc.2```,
- Running on ```express`v4.14.1```
- With ```forever v0.15.3```
- And gzip ```compression v1.7.0```
- 100% code coverage using ```mocha v3.5.2```, ```chai v4.1.2```, ```supertest v3.0.0``` and ``` "nyc 11.2.1"```,

## Resources
- [https://enable-cors.org](https://enable-cors.org)
- [https://en.wikipedia.org/wiki/Cross-origin_resource_sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [https://www.html5rocks.com/en/tutorials/cors](https://www.html5rocks.com/en/tutorials/cors)

## License
Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright (c) 2016, 2017, 2019 Martin Krause <github@mkrause.info> [http://martinkr.github.io)](http://martinkr.github.io)

