// dynamicImport.js
export function loadComponent() {
    return import('./Component.js'); // Lazy load the component
}

// main.js
import { loadComponent } from './dynamicImport.js';

loadComponent().then((Component) => {
    // Use the loaded component
});
  //Image Optimization
// {
//   <picture>
//     <source srcset="image.webp" type="image/webp">
//     <source srcset="image.jpg" type="image/jpeg">
//     <img src="image.jpg" alt="Description of image" loading="lazy" width="600" height="400">
// </picture>
// }
//
// Lazy Loading Images
// You can use the loading attribute for lazy loading images:

// html
// <img src="image.jpg" alt="Description" loading="lazy">
// gulpfile.js
//4. Minification and Compression
const gulp = require('gulp');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});
//Reduce Server Response Times
// location / {
//     add_header Cache-Control "public, max-age=31536000, immutable";
// }
