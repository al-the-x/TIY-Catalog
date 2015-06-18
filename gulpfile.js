var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref');

var browserSync = require('browser-sync').create();

// // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
 browserSync.init({
     // Convert `server: "src/"` to...
     server: {
       baseDir: "src/",
       routes: {
         "/bower_components": "./bower_components",

         // Request: http://localhost:XXXX/api/listing/XXXXXXXXXXX.json
         // Becomes: ./api/etsy/listing/XXXXXXXXXXX.json
         "/api": "api/etsy"
       }
     },
     directory: true,
 });

 gulp.watch("src/scss/*.scss", ['sass']);
 gulp.watch("src/*.html").on('change', browserSync.reload);
 gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
 // node-sass src/scss/main.scss -o src/css/
 gulp.src('src/scss/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('src/css/'))
   .pipe(sass({outputStyle: 'compressed' }))
   .pipe(gulp.dest('dist/css/'))
   .pipe(browserSync.stream());
}); // END gulp.task(sass)

gulp.task('clean', function(done){
 var del = require('del');

 del([
   'dist/**/*.*',
   'dist/**/.*',
   'dist/*.*',
   'dist/*',
   '!dist/.gitignore'
 ], done);
}); //END gulp.task(clean)

gulp.task('build', [ 'clean', 'sass' ], function(){
  var assets = useref.assets();

  gulp.src([  // gulp.from()
    // 'src/.htaccess',
    'src/*.html',
    // 'src/css/*.css',
    // 'src/js/*.js'
  ])
   .pipe(assets)
   .pipe(assets.restore())
   .pipe(useref())
   .pipe(gulp.dest('dist')); // gulp.into
});
