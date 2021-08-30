# What is this
Just some simple scripts to help me click the buttons on time for registering courses and tutorials in HKU. <br>
I am just a junior computer science student and in no way a professional. I do not guarantee that there is absolutely no bug in the code, so use at your own discretion.<br>
# How to use
Make sure your computer's time syncs with HK observatory's official time. <br>
Use Chrome as I have not tested the code in other browsers. <br><br>
For registering courses, get to the proceed to step 2 of 3 page, and then paste the content in course.js into your browser console. <br><br>
For registering tutorials (The script is yet to be tested) <br> 
1. Download tampermonkey chrome extension from here : https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
2. Get to the register page
3. Choose a class and remember the class number
4. Create a new userscript in tampermonkey and paste the content in tutorial.js to tampermonkey's text editor
5. Add these 3 lines between ``// ==UserScript==`` in tampermonkey's text editor
    ```
    // @grant        GM_setValue
    // @grant        GM_getValue
    // @grant        GM_deleteValue
    ```
6. Refresh the webpage
