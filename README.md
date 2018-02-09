Inspiration
Being all South Americans, we have seen the limited educational resources available to students in third world countries. We created this hack in order to pave a way to connect students in poor regions across the world with mentors willing to share their knowledge by tutoring these students who need the additional help. Many students worldwide do not have the proper resources to succeed in their schools or do not have substantial support to help them when they are struggling academically. Likewise, many people in more developed countries with more educational opportunities will learn about the reality of the living conditions in third world countries, developing a further appreciation and understanding of diverse cultures. This hack would aid in the process of helping and connecting students with people who could help tutor. We wanted to create a Facebook web app because of the social media's popularity. Facebook's presence and usage are widespread across all socioeconomic statuses. Because so many people have a Facebook account, we found it effective and beneficial to integrate our hack within Facebook for the convenience and feasibility for both mentors and students to access. This hack would be free for the students and the mentors; mentors volunteer to tutor the students.

What it does
To help solve this problem, we have developed a platform to connect verified and educated mentors with students in third world countries by using uPort's API to verify all credentials given by the mentors via smart contracts on the Ethereum blockchain. The hack asks for specific characteristics about a mentor, such as a name, language, country, level of education, courses taken, skills and age. Based on this inputted information, the program would match up a student with an appropriate mentor. The mentors and the mentees communicate through a video chat and the mentor helps the student in whichever subject area the student may need tutoring. After they get matched, the student and mentor go to a video chat to start the session.

How we built it
Although our original idea was to be a facebook based platform, we noticed that we were simply taking too long trying to read all the documentation and to have to code with all the constraints that facebook based applications have, so instead, we built a react app to make sure we had a proof of concept by the time we had to submit our hack.

This was our first time using react to build a web app, and we slowly figured out all the things that you need in order to get a react app up and running (Webpack, Babbel, Redux) but once we got those going then we quickly saw why React is such a popular language for building web apps. This took care of the front end for us and also used one of the boilerplate templates given to us by Kevin from the Consensys team for how to use the uPort API. It helped us out tons.

For all backend, we used Google's firebase client. This held all the necessary data and the match algorithm for the mentors and the mentees. We had planned to build an algorithm that only allowed 2 people (the mentor/mentee) to be inside a google hangout link at one time and when one 'chatroom' was filled, it would just spit out another chatroom, but as of right now I think it's safe to say that we are glad to have some sort of matching at all.

Challenges we ran into
The uPort API is not easy to figure out, at least for our group; it took hours of researching terms, looking over examples and really trying to get a feel for practical applications to help us visualize how we were going to integrate this into our application. It all seemed to work out in the end and we realized that the use now for the uPort API is endless, but there was definitely a learning curve.

Another great challenge to us was learning how to use React. Only Tony was familiar with the coding language so the rest of us had to learn as we coded. Our limited knowledge initially inhibited us from progressing with our hack, but we taught ourselves and managed to get the job done.

We were sad to hear that we couldn't do a Facebook-based application because of how many constraints and careful planning it takes to get something that works out there, but we just wanted to make sure that we had a proof of concept. We definitely see this product helping the most amount of people being a Facebook web app.

Accomplishments that we're proud of
Navigating through uPort's API was something that we were specifically really proud of despite knowing very little information about Ethereum before coming here and now we've built something with their smart contracts technology. It's just all very cool.

Eduardo found his love for React, he's a sophomore and this is his first hackathon and he seemed to be super happy about learning how to use react. Alex was proud of learning so much from this trip. He is an environmental engineer major but yet decided to come and learn more about what it means to be a computer programmer: programming applications for the benefit of humanity. Daniel and Piero further strengthened their skills and learned how to share their knowledge with Alex and Eduardo who are less experienced. Although our hack wasn't perfect, we are proud of what we were able to accomplish and hopefully improve upon it in the future.

We are all proud and happy to have made amazing new friends and memories here at HackDuke.

What we learned
The 24 hours time span seems a lot longer than it actually is. Time would just fly by, so we made sure to take those decisions to make writing lines of code a priority over theorizing. This is something that really helped us this time. Delegating time appropriately depending on our strengths was crucial for our success within the time constraints. We learned that it is possible to create something meaningful that could potentially add value to people's lives. Despite the undistributed coding experience, we all managed to chip in with what we knew, communicated, and worked effectively. Lastly, we learned that we could survive a sleepless night working on a program we all believed could bring a positive and real impact. Coding is extremely fun and empowering.

What's next for eduWorld
We will continue to expand and improve eduWorld by making it more user-friendly and advertising our new creation. Although this was just our idea for the Hackathon, we hope we inspired others to piggyback to our idea and take it all the way to completion. Our ultimate vision is for eduWorld to be implemented through Facebook as a web-based application for everyone around the world to use it and connect more of the world.

Built With
react
truffle
redux
jsx
webpak
uportapi
googlehangoutsapi
smartcontracts
ethereum
firebase
