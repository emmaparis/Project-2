# Setup List
General
* update .env.example file with db name, user and password
* change db name in db/schema.sql and seeds
* uncomment contents of seeds/seed.js and adapt with correct names
* put seed data in (and update name of) seeds/testData.json
* uncomment contents of models/index.js and models/User.js
* Add any new models and their relationships, delete unnecessary comments

In the terminal
* run npm init -y
* run npm i

Connect to Heroku
* heroku login
* heroku create {project name}
* git remote -v (to check connections)
* git push heroku main

Git and Heroku Connection
* Go to deploy tab in Heroku project
* Search for and select the git repository
* Set to update automatically on git push

Set up JawsDB
* heroku addons:create jawsdb:kitefin
* (on Heroku, remove from older files if space needed?)

Seed database on Heroku
* heroku run npm run seed
