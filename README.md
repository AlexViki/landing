# Первая верстка лейдинга

## Перед стартом проетка нужно проверить:

> node-v
> npm -v
    
для утстановки использовать: https://nodejs.org

* убедится что установлен Glup 4, на предыдущих версиях роботаь не будет

## Для чистой установки Glup 4 использовать:
> npm install gulpjs/gulp-cli -g

## С использованием предыдущих версий (если таковы были установлены), используем:
> npm install npm install gulpjs/gulp-cli#4.0 -g


## Для старта проекта:
* Склонировать даный репозиторий
> git-clone https://github.com/AlexViki/landing.git

* запустить команду npm install в терминале. Команда установить все пакеты и зависимости с packege.json

## Настройка package.json
* блок "config": {} - описывает путя к файлам, чтобы их потом подставлять в gulp.task и в gulp.watch , да бы каждый рас не прописывать одни и теже пути

## Обяснения к некоторым файлам
* в файл main.sass мы пишем только файлы которые будем импортировать

## Обяснения к пакетам
* пакет require-dir
> npm i require-dir@1.0.0
нужен для того чтобы в файле gulpfile.js задать 
(перенаправить) запуск команды gulp в каталог ./gulp внутри проекта. 
Синтаксис: > require('require-dir')('./gulp', {recurse: true})
(в скобках require-dir это название плагина)
(каталог а котором будуть таски)
* пакет gulp-sass
> npm i gulp-sass@3.2.1
нужен для преобразования файла SASS в CSS
* пакет node-sass-tilde-importer
> npm install node-sass-tilde-importer@1.0.2 --save-dev
помагает с помощю тильды делать 
исключительный путь к нашему файлу
* пакет  gulp-autoprefixer
> npm install --save-dev gulp-autoprefixer@5.0.0
нужен для добавления автопрафиксов в CSS-файл
 для разных браузеров при сборке проекта
* пакет gulp-cssnano
> npm i gulp-cssnano@2.1.3 --save-dev
нуже для минификации файла CSS
* пакет gulp-rename
> npm i gulp-rename@1.2.2 --save-dev
нужен для того чтобы перейменовывать минифицированые файли CSS, 
JS и не только минифицированые, вообще для перейменование файлов (например при сборке проекта)
* пакет gulp-sourcemaps
> npm i gulp-sourcemaps@2.6.4 --save-dev
для генерации css sourscemaps, которые будут помогать 
нам при отладке кода. Это способ связать минифицированный/объединённый файл с файлами, из которых он получился.
* пакет gulp-plumber
> npm i gulp-plumber@1.2.0 --save-dev
трудно разобраться, где именно ошибка, плагин gulp-plumber 
формирует вывод об ошибке, при этом работа Gulp не прерывается.
* пакет gulp-notify
> npm i gulp-notify@3.2.0 --save-dev
нужен для вывода сообщения об ощибке в одельном диалоговом окне
* пакет gulp-file-include
> npm i gulp-file-include@2.0.1 --save-dev
нуже для того чтобы вставлять фрагменты страниц с каталога template (footer.html, head.html и т.д.) в index.html
* пакет gulp-babel
> npm install --save-dev gulp-babel@7.0.1 babel-core babel-preset-env
нужен для TypeScript если таков будет использоватся
* пакет gulp-include
> npm install gulp-include@2.3.1 --save-dev 
* пакет gulp-uglify
> npm i gulp-uglify@3.0.0 --save-dev
служит для минификации js-файлов, удаляет пробелы, запятые, точки с запятой, js-файл получается меньшим по размеру. В настройках файла js.js подключаем послего того как файлі біли слиті в distr
* пакет npm i browser-sync
> npm i browser-sync@2.24.4 --save-dev
нужен для живого отображения изменений на странице в браузере. В файле server.js, параметр files: ['dist/**/*.*'] отслеживает все файлы, при изменении будер перегрежен сервер
* пакет npm i run-sequence
> npm i run-sequence@2.2.1 --save-dev
служит для выполения всех тасок поочередно. Актуально для Gulp ниже 4й версии. Если таски пропысаны в виде масива то run-sequence будет запускать их все паралельно.
* пакет gulp-imagemin
> npm install gulp-imagemin@4.1.0 --save-dev
для зжатия картинок
* пакет gulp-import-css
> npm install --save-dev gulp-import-css
для подключения файлов с каталога css/libs в файл libs.css 
@import url('libs/styles.css');
* пакет gulp-clean
> npm install --save-dev gulp-clean
для очистки каталога dist перед новой зборкой