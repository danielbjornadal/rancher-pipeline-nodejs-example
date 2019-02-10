FROM node:11

RUN mkdir -p /app
WORKDIR /app
COPY . .

RUN npm install typescript -g
RUN npm install
RUN npm run build

CMD npm run start