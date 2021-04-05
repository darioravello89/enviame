FROM node:12.18-alpine 

ENV JWT_SECRET='p4sta.w1th-b0logn3s3-s@uce'
ENV JWT_ALGORITHM='HS256'
ENV NODE_ENV='production'
ENV PORT=3000
ENV PREFIJO_APIS='/api/s2/v2/'
ENV LOG_LEVEL='silly' 

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
