# Dog Walker App
## Project Description

An app for dog walkers and their clients, where clients can request a dogwalker by selecting a timeframe available from a walker's appoinment table. Dog walkers can then choose a time that's good for the client and store it in on the appointment table. The client or walker can also delete themselves from the database if they no longer wish to do business.

## Wireframes

Initial idea - https://imgur.com/TIavn9j
Edited idea - https://imgur.com/97mOqLL
              https://imgur.com/U6RclS3
              https://wireframe.cc/TlonKL
Control flow- https://wireframe.cc/6Dh6Rj

## Priority Matrix

https://imgur.com/6L1AA1c 

## Technologies

Node.js
Express
Pg Promise
Morgan
Javascript
PSQL
EJS
CSS3
Dog API (optional)

## References
https://git.generalassemb.ly/wdi-nyc-rover/harrypotter-homework-solution/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
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

This is a snippet from my form edit ejs file (for update) that I 

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object  

In order to make a new appointment, make a form where the only thing you have to post is the available time. Converge all into one table, only one dog per timeslot
                          
