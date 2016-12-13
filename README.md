# Njsping

Njsping is a little module to help to make TCP probe and TCP ping. It's useful to know if some host is available.

### Installation

```sh
$ npm install --save njsping
```

### Use
```
var njsping = require('njsping');

//Set the host info and the time (ms) until abort connection requests.
var hostOptions = {
    address: '192.168.0.10', //default is 'localhost'
    port: '85', // default is 80
    timeout: 5000 //default is 1000 ms
};

//Ping
njsping.ping(hostOptions, function(err, connectionResults){
    console.log(err); 
    console.log(connectionResults);
})

/*
The response will be something like
{
    address: '192.168.0.10',
    port: '85',
    isAvailable: true,
    duration: 17
}

The error object can be something like ERRREFUSED, timeout or other reason for the unsuccessfull connection. Therefore, the connectionResults will be returned even if had some error, when "isAvailable" will be FALSE.
*/
```

### Contributions
Pull requests are welcome!

### Todos
 - Tests
 - Other TCP tests
 - Support to IPv6 ?

License
----
MIT
