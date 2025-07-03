### Tested: OK (in my Rpi3b+)

## Build and Dockerize a FullStack React app with Nodejs, MySQL and Nginx (proxy server)



Frontend: reacts     
Backend: nodejs + expressjs    
Database: MySQL    
Proxy Server: Nginx      
    
for backend, index.js is the main file. (port:4000 defined here)   
for frontend, /src/App.js is the main file (port:3000)   
     
## Step1:
> Clone this repo in your PC/laptop/vps.   
$ git clone repo_url

## Step2:
> inside the 'frontend' directory    
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

## Step3:
> inside the 'backend' directory.  
Run   
$ `npm install`   
It installs packages mentioned under the heading 'dependencies' in file package.json

## Step4:   
    
Docker image size   
MySQL (877mb)    
Adminer (117mb)     
Node (163mb)     
Backend (170mb)   
Frontend (504mb)     
       
inside the main project directory  
Run   
$ `docker-compose up -d`   


## Step5:

WARNING!!    
> you must wait for 5 minutes for setup MySQL properly.   
> u can check if MySQL is ready for connection.   
> $ sudo docker logs db   

Access the ADMINER using route    `http://host-ip:8000/`    
to login ADMINER, use    
server: db   
username: root   
password: MYSQL_ROOT_PASSWORD    
(or)    
server: db   
username: MYSQL_USERNAME  
password: MYSQL_PASSWORD    
      
setup.sql is executed automatically to create the db-table.      
        
      
## Step6:
> To start interacting with the application, open in a browser     
`http://localhost:80/`    
Note: Nginx server is running @port80.



http://192.168.0.102:8080 (Adminer).    

http://192.168.0.102:4000 (backend API).    
http://192.168.0.102:4000/book (backend API).     
http://192.168.0.102:4000/book/1 (backend API).    
    
http://192.168.0.102:3000 (frontend).   
    
Check out the step by step explained guide [here](https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)


https://www.webscale.com/engineering-education/build-and-dockerize-a-full-stack-react-app-with-node-js-mysql-and-nginx/

Source code in GitHub:

https://github.com/mosesreigns/Build-and-Dockerize-a-Full-stack-React-app-with-Node.js-MySQL-and-Nginx-for-reverse-proxy


