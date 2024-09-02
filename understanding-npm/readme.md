# Understanding npm

*   ### custom scripts 
    *   creating custom script **:** ``"script-name": "command"``
    *   running custom script **:** ``npm run script-name``
    *   **start**, is a special command that does not need **run** command. ```npm start``` will work.
* ### npm install
    *   ``npm install`` is used to install all the _latest_ packages that are available in the **package.json** file.
    *   **package-lock.json** file is used to install exact versions of packages that where used by developers.
* ### some usefull packages
    ```npm install nodemon --save-dev``` | installs **nodemon** on dev environment.
    ***
    * #### nodemon
        use ```"start": "nodemon app.js"``` in package _script_ to let app run automatically
    ***

        

   

