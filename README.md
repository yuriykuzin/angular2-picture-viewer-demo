# Angular 2 Picture Viewer Demo

Responsive picture viewing demo app in Angular2 that is made as a test task for Angular 2 developer.

<h3>Check it live here:</h3>
http://ubicoders.com/angular2-viewer

<h4>Please note</h4>
Thumbnails and big images are different because of the supplier.

<h4>Angular 2 Starter was used:</h4>
https://github.com/antonybudianto/angular2-starter

<h4>Original task is described below:</h4>

You are to create a responsive picture viewing application in AngularJS using a dummy JSON API, and our angular browserify seed. The use of jQuery is prohibited; use will automatically void your application. All CSS should be written as SASS. Follow the README.md on how to use the application seed.

API

●	http://jsonplaceholder.typicode.com/
●	Get all images [GET]: http://jsonplaceholder.typicode.com/photos
●	Get all images for an album [GET]: http://jsonplaceholder.typicode.com/albums/:album_id/photos
●	Get image [GET]: http://jsonplaceholder.typicode.com/photos/:photo_id

Pages to create:

●	photo list page - infinite scroll; URI: /
●	album view page; URI: /album/:id
●	image view page; URI: /image/:id

Flow:

1.	User lands on root (i.e. domain.com/).
2.	Images loaded from API are loaded onto the page (regardless of associated album).
3.	User can click on an associated album icon to view all images in an album; redirects to /album/:id.
4.	User can click on any image on the album view page to be redirected to the image view page /image/:id

Alternate Flow 1

1.	User lands on root (i.e. domain.com/)
2.	Images loaded from API are loaded onto the page (regardless of associated album). 
3.	3 User can click on any image to be redirected to the image view page /image/:id

Styling Requirements:

●	A menu should be placed at the top of the page, with the following links (icon usage is preferred):
○	root; URI: /
○	google; URL: https://www.google.com - to open in a new window
●	All images are to be displayed inside a block with the title underneath
●	Three (3) columns of image cards are to be displayed side by side (with respectable margins) for desktop viewport width
●	Two (2) columns of image cards are to be displayed side by side for tablet viewport width
●	Only a single column of image cards should be shown for a mobile viewport width
●	A fixed sticky footer with your name, and a link to the github fork
●	All content must be no wider than 960px
●	All content should be horizontally centred
