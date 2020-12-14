FROM node:latest

WORKDIR /

COPY . .
 
RUN npm install

ENV port=5000

EXPOSE 5000

CMD ["npm", "start"]