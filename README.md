# express-template
Minimal template for express.
It is relying on node package.json for server side dependencies and on bower for client side dependencies.
The purpose is to have something more simple than the express generator and support different configuration according to an environment variable.

## Requirements

Nodejs + npm (on Ubuntu, don't forget to create the symlink node to nodejs)

Bower
```
sudo npm install -g bower
```

git port is allowed or configure it to use https

```
git config --global url."https://".insteadOf git://
```

## Installation

```
  npm install
  bower install
```

## Usage

For adding new server dependencies, use npm
```
npm install PACKAGE --save
```

For adding new client dependencies, use bower
```
bower install PACKAGE --save
```
All the client dependencies will go in public/js/deps, update .bowerrc to change this path

For starting the application, use npm
```
  npm start
```

## Tests

```
  NODE_ENV=dev npm start
```

## Contributing


## Release History

* 0.1.0 Initial release
