# seed-states [![npm version](https://badge.fury.io/js/seed-states.svg)](https://badge.fury.io/js/seed-states)

states other pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-states --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-states');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-states* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-states/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-states config options
```
