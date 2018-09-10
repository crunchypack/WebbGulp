const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify")
const watch = require("gulp-watch");

/* Flytta html filer */
gulp.task("copyhtml", function(){
  return gulp.src("src/*.html")
        .pipe(gulp.dest("pub/"));
});

/* Sammanslå och minifiera JavaScript */
gulp.task("concominjs", function(){
    return gulp.src("src/js/**/*.js")
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("pub/js"));
});
/*Kontrollera ändringar
gulp.task("watcher", function(){
    gulp.watch("src/js/*.js", ['concominjs']);
    gulp.watch("src/*.html", ['copyhtml']);
}) ;
*/
gulp.task("watcher", function(){
    watch("src/js/*.js",function(){
        gulp.start("concominjs");
    });
    watch("src/*.html", function(){
        gulp.start("copyhtml");
    });
});
gulp.task("default", ["watcher"]);