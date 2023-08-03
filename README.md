I have been learning about MERN from a long time. Finally I have made a practical use of my skills. In this summer break I have created Query Verse a QnA website which is very much inspired by Stack Overflow.

**What users can do :**
- Users can create and edit their profile along with the tags in which users are interested in.
- A user can simply ask a question, add a body to elaborate about the question and can add tags (which will help other users to find similar questions easily).
- Users can share and delete their questions whenever they want.
- Users can up vote or down vote other questions.
- Users can answer other questions, they can also delete their answer if they need.

To enhance the security I have used jwt (json web token) which logs out every user after 1 hour session.
Also I have used bcrypt which creates a hashed password hence in the data base, the owner can not decode anyone's password.
To keep the change in states more predictable and traceable I have used Redux and to keep the components centralized and re-useable I have used redux thunk.
I have used moment to track down the time of question aksed, question answered and since when the user is a part of this website.

**Technologies I used -**
ReactJS - For the front end part
CSS3 - For styling
Express.js and Node.js - For server side programming
MongoDB and Mongoose - For database

