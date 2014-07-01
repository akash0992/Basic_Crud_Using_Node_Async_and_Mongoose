CrudUsingAsync
==============
============
### NodeJS  and MongooseJs module for for demonstrating basic CRUD in nodejs.

Requirement
------------
Prerequisite, nodejs, npm and mongo db.

Installation
------------
I have use async module for executing methods in series. for that you have to get async module using npm.
Simply compile and install `node-lame` using `npm`:
``` bash
$ npm install async
```
Before execution the application. You have to run the MongoDb. To run mongodb
``` bash
$ sudo service mongod start
```
now simply run the application that you have already downloaded ie.
CrudUsingAsync.js using node

``` bash
$ node CrudUsingAsync.js 
```
Output
-------

``` bash
>>>>>>Inserted successfully<<<<<<
>>>>>>Read the data from test db<<<<<<
[ { _id: 53b262815bf715160e4477e1,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262a4c501282f0e7d8e67,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262f2d711a4770e54ff5f,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b2648a462985100f3cec8d,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b2e954758beb5115c57ee4,
    title: 'Thor',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 } ]
>>>>>>Updated successfully<<<<<<
1
>>>>>>Read the data from test db<<<<<<
[ { _id: 53b262815bf715160e4477e1,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262a4c501282f0e7d8e67,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262f2d711a4770e54ff5f,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b2648a462985100f3cec8d,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b2e954758beb5115c57ee4,
    title: 'Thor2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 } ]
>>>>>>Deleted successfully<<<<<<
>>>>>>Read the data from test db<<<<<<
[ { _id: 53b262815bf715160e4477e1,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262a4c501282f0e7d8e67,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b262f2d711a4770e54ff5f,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 },
  { _id: 53b2648a462985100f3cec8d,
    title: 'Tho2',
    rating: 'PG-13',
    releaseYear: 2011,
    hasCreditCookie: true,
    __v: 0 } ]
Crud has been done
```

[NodeJS]: http://nodejs.org

