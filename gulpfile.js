var gulp           = require('gulp'),
  	rename         = require('gulp-rename'),
  	replace        = require('gulp-replace-task');

 
gulp.task('ctr', function () {
  gulp.src('html/*.html')
    .pipe(replace({
      patterns: [
        {
          match: /<head>/,
          replacement: '<head><base href="http://<?php echo $host;?>/dis/">'
        },
        {
          match: /<script(?:.*?)jquery(?:.*?)<\/script>/,
          replacement: '<?php echo $traf_script_head_js; ?>'
        },
        {
          match: /<body([^>]*)>/,
          replacement: '<body$1><?php echo $on_success_script;?><?php echo $default_country_script;?>'
        },
        {
          match: /action="(?:[^"]*)"/g,
          replacement: 'action="<?php echo $form_order_action;?>"'
        },
        {
          match: /<select(.*?)(name="country"|class="country([^"]*)")(.*?)(name="country"|class="country([^"]*)")([^>]*)+>(\s\S*?)+<\/select>/g,
          replacement: '<select$1$2$4$5$7><?php echo $select_country_options;?></select>'
        },
        {
          match: /<\/form>/g,
          replacement: '<?php echo $traf_form_input; ?></form>'
        },
        {
          match: /<\/body>/,
          replacement: '<?php echo $every_page_pixel;?></body>'
        },
      ]
    }
))

    .pipe(rename({      
      extname: '.php'    
    }))

    .pipe(gulp.dest('out/'));
});