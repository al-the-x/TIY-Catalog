var gulp = require('gulp');

gulp.task('do-something', function(){
  console.log(arguments);
  console.log('I did something!');
}); // END gulp.task(do something)

gulp.task('sass', function(){
  // node-sass src/scss/main.scss -o src/css/
  var sass = require('gulp-sass');

  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    // .pipe(sass({ outputStyle: 'compressed' }))
    // .pipe(gulp.dest('dist/css/main.css'))
}); // END gulp.task(sass)

gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', [ 'sass' ], function(){
    console.log('In your Sass files....', 'Building your CSS');
  });
  gulp.watch('src/*.html', [ 'build' ]);
}); // END gulp.task(watch)

gulp.task('clean', function(done){
  var del = require('del');

  del([
    'dist/**/*.*',
    'dist/**/.*',
    'dist/*',
    '!dist/.gitignore'
  ], done);
}); // END gulp.task(clean)

gulp.task('build', [ 'clean', 'sass' ], function(){
  gulp.src([ //gulp.from()
    'src/*', '!src/scss'
  ])
    .pipe(gulp.dest('dist/')); //gulp.into()
}); // END gulp.task(build)
