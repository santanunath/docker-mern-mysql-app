FROM node:alpine
WORKDIR /app
COPY package*.json ./
#RUN  npm install --package-lock-only
RUN  npm install
COPY ./ ./
CMD ["npm", "run", "start"]
