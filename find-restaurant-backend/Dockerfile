 FROM node:12-alpine
RUN mkdir /code
WORKDIR /code
RUN npm install
COPY . /code/
CMD ["node", "index.js"]