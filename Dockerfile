FROM node:11.3

RUN mkdir /usr/lib/app -p
WORKDIR /usr/lib/app

COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY . .

EXPOSE 8080
# CMD ["npm", "start", "--production"]
CMD ["npm", "run", "start"]

# docker run -p 8080:8080 --name messages-svc-container -d messages-svc