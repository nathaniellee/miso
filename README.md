Miso
====

Miso is a JavaScript implementation of the Publish/Subscribe pattern as a way to communicate messages between objects that would otherwise require tighter coupling. The Miso object is an effective singleton that provides methods other objects can use to subscribe to and publish data on specific topics.

API
---

### #subscribe(topic, subscriber)

Registers interest in a specified **topic**, a string, to be handled by the code contained with the **subscriber** function which itself accepts a single argument **data** which can be any type of object.

```javascript
function initializeProfile(data) {
  document.getElementById("name").value = data.name;
  document.getElementById("age").value = data.age;
  document.getElementById("gender").value = data.gender;
  document.getElementById("ethnicity").value = data.ethnicity;
}

Miso.subscribe("loaded", initializeProfile);
```

### #unsubscribe(topic, subscriber)

Removes the specified **subscriber** function from the subscriber queue for the specified **topic**.

```javascript
Miso.unsubscribe("loaded", initializeProfile);
```

### #publish(topic, data)

Calls all functions that have been subscribed to the specified **topic** with the provided **data** argument which can be an object of any type.

```javascript
Miso.publish("loaded", {
  name: "John Smith",
  age: 26,
  gender: "male",
  ethnicity: "English"
});
```

License
-------

### The MIT License (MIT)

Copyright (c) 2013 Nathaniel Lee

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.