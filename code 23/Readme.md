## How to host Node.js apps on ubuntu

### Step 1 - Installing Node.js & build essentials
```
curl -fssl https://deb.nodesource.com/setup_21.x | sudo-E bash - &&\
sudo apt-get install -y nodejs
```
Now install build essentials
```
sudo apt-get install build-essential
```

### Step 2 - Create a sample Node.js app
you can also use own app if you want to host it. othrwise if you are just trying out, you can use a sample app.

### step 3 - Install pm2
Install pm2 package which is a process manager for Node.js applications
```
sudo npm install -g pm2
```
Now launch your app using this Command
```
pm2 start index.js
```

### Step 4 - Install nginx
Nginx is a web server which we wil be using as a proxy
```
sudo apt install nginx
```

Now edit the file at /etc/nginx/sites-avilable/default using following command
```
sudo nano /etc/nginx/sites-avilable/default
```

We want this file to look like this:
```
. . .
    location / {
        proxy_pass https://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $Host;
        proxy_cache_bypass $http_upgrade;
    }
. . .
```

### Step 5 - Test and restart nginx
Test and restart nginx using following cammands
```
sudo nginx -t
```
Now restart using:
```
sudo systemctl restart nginx
```
