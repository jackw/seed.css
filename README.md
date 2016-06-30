# seed-cli [![npm version](https://badge.fury.io/js/seed-cli.svg)](https://badge.fury.io/js/seed-cli)
CLI for [Seed CSS](https://github.com/helpscout/seed)

<img src="https://raw.githubusercontent.com/helpscout/seed-cli/master/seed-cli.png" width="200">

## Install
```
npm install seed-cli -g
```

## Features
* Easy to create new Seed add-on packs
* Generate component/object/utility `.scss` code
* Lint your `.scss`!

## Usage
```
Usage:
  seed <command>

Commands:
  n, new          Creates a new Seed package
  g, generate     Creates a new .scss module (component/object/utility)

Options:
  -c, --config    Custom sass-lint config (.yml)
  -i, --ignore    Ignore files for linting/testing
  -l, --lint      Initialize .scss lint (powered by sass-lint)
```

## Thanks

Many thanks to [Ember CLI](https://github.com/ember-cli/ember-cli) and [tachyons](https://github.com/tachyons-css/tachyons-cli) for their inspiration!
