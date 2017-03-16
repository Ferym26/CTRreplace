var gulp           = require('gulp'),


	rename         = require('gulp-rename'),


	replace = require('gulp-replace-task');



// Таск замены А на Б
// перед А в тексте должны быть @@
 
gulp.task('ctr', function () {
  gulp.src('html/*.html')
    .pipe(replace({
      patterns: [


        {
          match: /<head>/,
          replacement: '<head><base href="http://<?php echo $host;?>/dis/">'
        },


        {
          match: /<script src="http:\/\/code.jquery.com\/jquery-latest.min.js"><\/script>/,
          replacement: '<?php echo $traf_script_head_js; ?>'
        },

        {
          match: /<body>/,
          replacement: '<body><?php echo $on_success_script;?><?php echo $default_country_script;?>'
        },

        {
          match: /action=""/,
          replacement: 'action="<?php echo $form_order_action;?>"'
        },

        {
          match: /<option value="[a-zA-Z]+">[a-zA-Zа-яА-Я]+<\/option>/,
          replacement: 'action="<?php echo $form_order_action;?>"'
        },

        
      ]
    }))

    .pipe(rename({      
      extname: '.php'    
    }))

    .pipe(gulp.dest('out/'));
});
//