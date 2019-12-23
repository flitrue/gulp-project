const { src, dest } = require('gulp');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-clean-css');
const concat = require('gulp-concat');


function uglifyTask() {
  return src('src/index.js')
    .pipe(uglify())
    .pipe(dest('dist/'));
}

function renameTask() {
  return src('src/render.js')
    .pipe(rename('bundle.js'))
    .pipe(dest('dist'));
}

function cssminTask() {
  return src('src/*.css')
    .pipe(cssmin())
    .pipe(dest('dist/css'));
}

function htmlminTask() {
  return src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function concatTask() {
  return src('src/libs/*.js')
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(dest('dist'));
}

function defaultTask(cb) {
  console.log('hello gulp');
  cb();
}

function buildTask(cb) {
  console.log('build');
  cb();
}

exports.uglify = uglifyTask;
exports.rename = renameTask;
exports.cssmin = cssminTask;
exports.htmlmin = htmlminTask;
exports.concat = concatTask;
exports.build = buildTask;
exports.default = defaultTask;