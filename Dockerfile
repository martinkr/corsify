# use alpine linux with node and yarn and the user "node"
FROM node:alpine

ENV NPM_CONFIG_LOGLEVEL warn
# ENV NODE_ENV production

# set the working directory
WORKDIR /app
# copy current ("./") directory into the working directory
ADD . /app

# install from package.json
RUN yarn

# classic express port
EXPOSE 3000

# run the startup script.
# if none is defined, $ yarn start defaults to $ node server.js
#CMD [ "yarn", "start" ]
CMD [ "tail", "-f" ,"/dev/null" ]

