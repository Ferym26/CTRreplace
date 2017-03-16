# CTRreplace v0.1
### Gulp таск для подставноки тегов для сайтов CTR

### Установка
 - Установить [NodeJs](https://nodejs.org)
 - Установить [Git](https://git-scm.com/). [Гайд №1](https://www.youtube.com/playlist?list=PLY4rE9dstrJyTdVJpv7FibSaXB4BHPInb), [Гайд №2](https://www.youtube.com/playlist?list=PLoonZ8wII66iUm84o7nadL-oqINzBLk5g)
 - Устноваить и настроить [ConEmu](http://www.conemu.ru) (желательно), [гайд](https://www.youtube.com/watch?v=x0hw8llIZkY) по настройке. (удобный терминал для пользователей Windows)

 Выполнить в корне:
```sh
$ npm i
$ npm i -g gulp (*)
(*) Если не установлен глобально
```

### Как использовать
 - в папку "html" поместить *.html файл(-ы)
 - выполнить "gulp ctr"
 - забрать из папки "out" %filename%.php


### Особенности
 - замена jq: таск ищет и меняет именно эту строку "<script src="http://code.jquery.com/jquery-latest.min.js"></script>"
 - тег в футер нужно проставлять руками, ввиду большого количества разных вариантов верстки
 - action="" должен быть пустым
 - чистый <body>
