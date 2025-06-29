# Consider Two separate machines
# 1: container-machine (virtual)
# 2: host-machine (physical), Rpi

# Note: we are only copying the package*.json files first to install necessary packages.
#  then we are again copying all files (u r a bit confused? it is done for caching)

# Container gets BUILD when 
# docker-compose is run

# 'npm install'.. installs all 
# dependant apps mentioned in 
# 'package.json' file

FROM node:alpine
WORKDIR /app
COPY package*.json ./
#RUN  npm install --package-lock-only
RUN  npm install
COPY ./ ./
CMD ["npm", "run", "start"]
