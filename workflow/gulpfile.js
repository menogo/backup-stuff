var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js', 'public/js/**/*.js'];

gulp.task('style', function () {
  return gulp.src(jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', {
        verbose: true
      }))
      .pipe(jscs())
      .pipe(jscs.reporter());
});

gulp.task('inject', function () {
  // wiredep will look for bower.json file
  // 'dependencies' property
  var wiredep = require('wiredep').stream;
  var option = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  }

  var inject = require('gulp-inject');
  var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});
  var injectOptions = {
    ignorePath: '/public'
  }

  return gulp.src('./src/views/*.html')
      .pipe(wiredep(option)) // inject third lib css/js
      .pipe(inject(injectSrc, injectOptions)) // inject our css/js
      .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
  // passing to nodemon
  var options = {
    script: 'app.js',
    delayTime: 1,
    env: {
      'PORT': 3000
    },
    watch: jsFiles
  }

  return nodemon(options)
      .on('restart', function (ev) {
        console.log('Restarting....');
      })
});