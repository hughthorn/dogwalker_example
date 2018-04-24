# Dog Walker App
## Project Description

An app for dog walkers and their clients, where clients can request a dogwalker by selecting a timeframe available from a walker's appoinment table. Dog walkers can then choose a time that's good for the client and store it in on the appointment table. The client or walker can also delete themselves from the database if they no longer wish to do business.

## Video Presentation
https://www.youtube.com/watch?v=0YZUUW2gyAA

## User Story
 I’m a dog walker, and I want to be able to find potential customers and list my available appointment times.

 I'm a dog owner, but I don't have the time to walk my dog every day. I want an app that will allow me to look up available appointments from walkers to take my dog out within the immediate area.

## Wireframes

Initial idea - https://imgur.com/TIavn9j
Edited idea - https://imgur.com/97mOqLL
              https://imgur.com/U6RclS3
              https://wireframe.cc/TlonKL
Control flow- https://wireframe.cc/6Dh6Rj

## Priority Matrix

https://imgur.com/6L1AA1c 

## Technologies

Node.js,
Express,
Pg Promise,
Morgan,
Javascript,
PSQL,
EJS,
CSS3,
Dog API (optional)

## References
https://git.generalassemb.ly/wdi-nyc-rover/harrypotter-homework-solution/,
https://css-tricks.com/snippets/css/a-guide-to-flexbox/,
https://medium.com/@aem_iro/deploying-a-node-js-postgressql-app-to-heroku-hosting-platform-cc611287ae76,
https://www.mountaingoatsoftware.com/agile/user-stories,
http://guides.rubyonrails.org/association_basics.html,
David Anzaria from SRC, who helped me develop the idea of the dog walker app.

## MVP 

Landing/homepage
Login page
Client list and appointment list
Logout page with link to homepage
Basic CSS styling

## Post MVP

Able to log in as client
Elaborate CSS styling
Ability to create account
Utilize Dog API

## Code Snippet

    <% include ../../partials/boilerplate %>
    
    <div class="edit">
    <form action="/<%=booked.id%>?_method=PUT" method="POST">
      <input type="text" name="dog_id" value="<%=booked.dog_id%>" /><br>
      <input type="submit" value="Make Appointment" />
    </form>
    <a href="/"> Back to Main List </a>
    </div>
    
    <% include ../../partials/end %>

This is a snippet from my form edit ejs file (for update) that I was able to figure out on my own, using the Harry Potter homework as a reference.

## Issues and Resolutions

Below is a list of errors I encountered:
**ERROR**: psql dog_walker_crud_test -f schema.sql
You are now connected to database "dog_walker_crud" as user "hughthornhill".
psql:schema.sql:12: ERROR:  syntax error at or near "DROP"
LINE 2: DROP TABLE IF EXISTS walker
        ^
psql:schema.sql:19: ERROR:  relation "client" does not exist
LINE 1: INSERT INTO client
                              
**RESOLUTION**: An additional comment was left within the sql file, causing the error.

**ERROR**: /Users/hughthornhill/code/wdi/unit02/projects/dogwalker-project-2/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires a callback function but got a [object Undefined]
**RESOLUTION**: Wrong function was being called in the route

**ERROR**: 3. psql:db/schema.sql:11: ERROR:  relation "appointments" does not exist
psql:db/schema.sql:17: ERROR:  relation "appointments" does not exist
CREATE TABLE
psql:db/schema.sql:28: ERROR:  relation "dogs" does not exist
LINE 1: INSERT INTO dogs
                    ^
psql:db/schema.sql:33: ERROR:  relation "walker" does not exist
LINE 1: INSERT INTO walker
**RESOLUTION**: Foreign keys were not set up properly. Fixed syntax.

