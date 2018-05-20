'strict mode'
const gulp = require('gulp'); // находится в каталоге node_modules
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');
const rename = require('gulp-rename');


// ******* Server ********
gulp.task('server', function() { // server - название задания
browserSync.init({
        server: {
            port: 9000, // порт на котором роботает npm пакет - browser-sync
            baseDir: 'build' //за этим каталогом будет смотреть сетвер, если тут
			// будут изменения, сервер будет прегрежать страницу
        }
    });
gulp.watch('build/**/*').on('change', browserSync.reload); //
	// build/**/* - путь за которыми должен смотреть сервер, **/* означает
	// все вложеные файлы и папки
	// change - собития на которое должен реагировать сервер
	// browserSync.reload - перезапустить сервер
});
// ************************



/* ------------ Pug compile ------------- */
// задание - компиляция шаблонов
gulp.task('templates:compile', function buildHTML() {
	// templates:comile - название таски
  return gulp.src('source/template/index.pug') // путь к templates
	// применяем задачу pug (var pug = require('gulp-pug');)
	// к файлу source/template/index.pug
	.pipe(pug({
    pretty: true
	// если запустить таску templates:comile
	// без этого параметра, то index.html будетв одну строчку
  }))
	.pipe(gulp.dest('build'))
	// указываем куда ложить, в каталог build
	//
});
/*--------------------------------------*/

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function () {
  return gulp.src('source/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
	.pipe(gulp.dest('build/css'));
});
/*--------------------------------------*/


/* ------------ Sprite ------------- */
gulp.task('sprite', function(cb) {
  const spriteData = gulp.src('soure/images/icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
	imgPath: '../images/sprite.png',
    cssName: 'sprite.scss'
  }));
  	spriteData.img.pipe(gulp.dest('build/images/'));
	spriteData.css.pipe(gulp.dest('source/styles/global/'));
	cb();
});
/*--------------------------------------*/


/* ------------ Delete ------------- */
// подчищает каталог build от старых файлов после пересборки
gulp.task('clean', function del(cb){
	return rimraf('build', cb);
});
/*--------------------------------------*/


/* ------------ Copy fonts ------------- */
// копирование шрифтов в каталог build
gulp.task('copy:fonts', function(){
	return gulp.src('./source/fonts/**/*.*')
	.pipe(gulp.dest('build/fonts'));
});
/*--------------------------------------*/


/* ------------ Copy images ------------- */
// копирование картинок в каталог build
gulp.task('copy:images', function(){
	return gulp.src('./source/images/**/*.*')
	.pipe(gulp.dest('build/images'));
});
/*--------------------------------------*/

/* ------------ Copy ------------- */
// обеденение двух задач Copy fonts и Copy images в одну
// усли нужно будет мы можем их выполнить по одельности
// parallel - присутствует только в 4м gulp
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));
/*--------------------------------------*/


/* ------------ Watchers ------------- */
gulp.task('watch', function(){
	gulp.watch('source/template/**/*.pug', gulp.series('templates:compile'));
	gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));
});
gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('templates:compile', 'styles:compile', 'sprite', 'copy'),
	gulp.parallel('watch', 'server')
));
