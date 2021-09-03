FROM node:latest
WORKDIR /usr/src/app
COPY ./ /usr/src/app/
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "node", "server.js" ]
