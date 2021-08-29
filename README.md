## Inspiration
Due to the recent events of COVID, many students all across the nation had to attend virtual school this year. This was a tough year for many people, especially having to manage your own studying, without a teacher or being with peers to answer each other's questions.
## What it does
EduFlow is an online community inspired by the recent events of virtual school. EduFlow allows people to ask questions for certain subjects and post it onto the EduFlow forum. Other people taking those classes are able to answer those questions.
## How we built it
EduFlow's web page was built using HTML, CSS, and JavaScript. In order to send questions and answers back and forth between users, a socket.io connection is utilized. Socket.io is a real-time event-based communication library for JavaScript.
## Challenges we ran into
Some of the challenges we faced while building this app were sending the data back and forth between users. There were some different ways we could have achieved sending data back and forth. However, we went with Socket.io because it allowed for data to be sent at very high speeds and at real-time, which would be convenient for users. Styling was another hard part, because CSS has many different properties and rules that can be utilized. We found SVG's to be very helpful for designing drawn elements or graphics, because they're scalable and easy to implement.
## Accomplishments that we're proud of
We are extremely proud of the final look of our webpage. Though it still has room for improvement, it was amazing what we could put together in less than 48 hours. Also, getting the data to send back and forth was a huge success for us, and we're super proud of that!
## What we learned
We refined our web development skills and were able to successfully utilize JavaScript libraries and frameworks, styling, and a web server to host our webpages.
## What's next for EduFlow
The next steps for EduFlow would be to allow users to create an account and add specific courses for themselves, so that they would only see courses that apply to them in the main page of the site. Also, in order to scale up the data communication, a Firebase database could be used to have the data in the cloud and allow for more efficient transmission. Another benefit of this is that users could have their data saved to the cloud.