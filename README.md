## Build and Dockerize a FullStack React app with Nodejs, MySQL and Nginx (proxy server)


> Note: here CLASS based components are used


Frontend: reacts     
Backend: nodejs + expressjs    
Database: MySQL    
Proxy Server: Nginx      
    
for backend, index.js is the main file. (port:3001 defined here)   
for frontend, /src/App.js is the main file    
     
Step1:
> Clone this repo in your PC/laptop/vps.   
$ git clone repo-url

Step2:
> inside the 'frontend' directory    
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

Step3:
> inside the 'backend' directory.  
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

Step4:
inside the main project directory  
Run   
$ `docker-compose up --build`   


Step5:
> Access the ADMINER using route    `http://host-ip:8000/`


to login ADMINER, use    
server: db   
username: root   
password: MYSQL_ROOT_PASSWORD    

setup.sql is executed automatically to create the db-table.      
        
      
Step6:
> To start interacting with the application, open in a browser     
`http://localhost:80/`    
Note: Nginx server is running @port80.

Check out the step by step explained guide [here](https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)


https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-node-js-mysql-and-nginx/

Source code in GitHub:

https://github.com/mosesreigns/Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy


