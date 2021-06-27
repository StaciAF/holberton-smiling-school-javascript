# 0x0F. Build a web app in JavaScript
### Trimester 1 Final Project
*  Completion of Front-End specific studies in Web Development Specialization @ Holberton School Tulsa
#### Task 0
 Your project must have at least 3 HTML pages
 You must use a styles.css file (and any relevant files/folders for images, fonts, etc.)
 You must create an interactive Figma mockup for each page you want to design for both desktop and mobile
 For this task, please write an amazing README.md
 Interactions note:
 Web pages must switch to the tablet version when the screen width is 768px
 Web pages must switch to the mobile version when the screen width is 576px
 button hover/active: opacity: 0.9

 #### Task 1
![Screen Shot 2021-06-27 at 10 49 53 AM](https://user-images.githubusercontent.com/56170981/123550988-715b9d00-d735-11eb-92e1-33dc6188047a.png)
 This task has been changed to include all content you were asked to do in Task 2 and Task 3.
 Create a landing page for your 3-page site.
 You must use JQuery and Ajax requests.
 A loader should be present when loading any dynamic content.
 YOU get to pick where you are loading data, either from your own web server or an API you’ve found online that has interesting and relevant data to your 3-page site.
 You must use a bootstrap carousel on this page that gets populated with dynamic content
 You must include bootstrap cards that get populated dynamically with content and have either an image or a video (again, those images or videos must be populated dynamically)
 Everything must be responsive and respect the tablet/mobile version sizes above
 Here are some open APIs you could explore (or go find your own): https://github.com/public-apis/public-apis
 All pages should be accessible from any other page
 Example of a loader:
 ```
 HTML:
 <div class="loader"></div>

 CSS:
 .loader {
     border: 10px solid #f3f3f3;
     border-top: 10px solid #C271FF;
     border-radius: 50%;
     width: 80px;
     height: 80px;
     animation: spin 2s linear infinite;
     margin: auto;
 }

 @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
 }
 ```

 #### Task 2
![Screen Shot 2021-06-27 at 10 42 28 AM](https://user-images.githubusercontent.com/56170981/123551007-89cbb780-d735-11eb-8fcb-2bfc61833234.png)
 Design a second page that is relevant page of your application
 You must use JQuery and Ajax requests.
 A loader should be present when loading any dynamic content.
 YOU get to pick where you are loading data, either from your own web server or an API you’ve found online that has interesting and relevant data to your 3-page site.
 Ideas for another page: Pricing, About, Contact, Events, Projects, News
 All pages should be accessible from any other page

 #### Task 3
![Screen Shot 2021-06-27 at 10 51 18 AM](https://user-images.githubusercontent.com/56170981/123551023-9e0fb480-d735-11eb-9c12-40e6523ae4eb.png)
 Design a third page that is  relevant to your application
 You must use JQuery and Ajax requests.
 A loader should be present when loading any dynamic content.
 YOU get to pick where you are loading data, either from your own web server or an API you’ve found online that has interesting and relevant data to your 3-page site
 The API must have query parameters to allow for searching and sorting and your UI must allow the user to utilize the search/sort portions of that API to populate dynamic data. You could do this with dropdowns, search bars, etc.
 The searching and sorting MUST happen with the API and not just with JavaScript on your client.
 API requests must be done when the search value changes or the way data is sorted changes (done by the user on your UI somehow)
 Ideas for another page: Pricing, About, Contact, Events, Projects, News
 All pages should be accessible from any other page
