var gulp = require("gulp");
var uglify = require("gulp-uglify");
var livereload = require("gulp-livereload");
//var autoprefixer = require('gulp-autoprefixer');
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");

//File Scoure paths
var SOURCE_ROOT_PATH = "src/SASS_version3.2/";
var DEST_ROOT_PATH = "public/";
var HTML_PATH = SOURCE_ROOT_PATH + "**/*.html";
var PLUGINS_PATH = SOURCE_ROOT_PATH + "assets/plugins/**/*";
//all third party plugins
var STYLES_PATH = SOURCE_ROOT_PATH + "assets/sass/**/*.scss";
//css
var SCRIPTS_PATH = SOURCE_ROOT_PATH + "assets/js/**/*.js";
//js
var IMAGES_PATH = SOURCE_ROOT_PATH + "assets/img/**/*";
//var IMAGES_PATH = '';

//File Destination Path
var HTML_DEST_PATH = DEST_ROOT_PATH;
var PLUGINS_DEST_PATH = DEST_ROOT_PATH + "assets/plugins/";
//all third party plugins
var STYLES_DEST_PATH = DEST_ROOT_PATH + "assets/css/";
//css
var SCRIPTS_DEST_PATH = DEST_ROOT_PATH + "assets/js/";
//js
//var IMAGES_DEST_PATH = '';
var IMAGES_DEST_PATH = DEST_ROOT_PATH + "assets/img/";
//GULP TASKS
//HTMLs
gulp.task("htmls", async function () {
  console.log("Starting HTMLs Task");
  return gulp.src(HTML_PATH).pipe(gulp.dest(HTML_DEST_PATH));
});

//Plugins
gulp.task("plugins", async function () {
  console.log("Starting Plugins Task");
  return gulp.src(PLUGINS_PATH).pipe(gulp.dest(PLUGINS_DEST_PATH));
});
//Style for SCSS
gulp.task("style", async function () {
  console.log("Starting SCSS Style Task");
  return (
    gulp
    .src(STYLES_PATH)
    .pipe(
      plumber(function (err) {
        console.log("Style Task Error");
        console.log(err);
        this.emit("end");
      })
    )
    .pipe(sourcemaps.init())
    //.pipe(autoprefixer())
    .pipe(
      sass({
        outputStyle: "nested",
        includePaths: [
          "./node_modules/bootstrap/scss",
          "./node_modules/@fortawesome/fontawesome-free/scss"
        ]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(STYLES_DEST_PATH))
  );
});
//icons
gulp.task("icons", async function () {
  return gulp
    .src("./node_modules/@fortawesome/fontawesome-free/webfonts/*")
    .pipe(gulp.dest(DEST_ROOT_PATH + "/assets/webfonts/"));
});

//Script
gulp.task("script", async function () {
  console.log("Starting Script Task");
  return gulp
    .src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest(SCRIPTS_DEST_PATH));
});
//Images

gulp.task("image-min", async function () {
  console.log("Starting Image Min Task");
  return gulp
    .src(IMAGES_PATH)
    .pipe(imagemin())
    .pipe(gulp.dest(IMAGES_DEST_PATH));
});
//Default
// gulp.task("default", async function() {
//   console.log("Starting Default Task");

// });

gulp.task(
  "default",
  gulp.parallel("htmls", "style", "plugins", "icons", "script", "image-min", async function () {
    // Build the website.
    console.log("Starting Default Task");
  })
);

//watch

gulp.task("watch", async function () {
  console.log("Starting watch Task");
  require("./server.js");
  livereload.listen();
  gulp.watch(HTML_PATH, gulp.series("htmls"));
  gulp.watch(STYLES_PATH, gulp.series("style"));
  gulp.watch(PLUGINS_PATH, gulp.series("plugins"));
  gulp.watch(SCRIPTS_PATH, gulp.series("script"));
  gulp.watch(IMAGES_PATH, gulp.series("image-min"));
});