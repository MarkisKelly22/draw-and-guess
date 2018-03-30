# Draw and Guess
Draw and Guess - AI Project
Team : Sagar,David,Markis,Ernest,Nicholas,Marcus

# Requirements Specifications

Draw and Guess is a web application created using artificial intelligence. Draw and Guess is expected to take in user input in the form of a drawing and attempt to guess what the user has drawn. Using data gathering, Draw and Guess will continue to learn different shapes. The purpose of Draw and Guess is to deliver a user-friendly web interface that can learn on it own due to user interaction and constant insertion of data.
 
# Application Expectations
1.	User should be able to draw any shape
2.	User should be able to navigate easily through web application 
3.	Draw and Guess should correctly state the shape that is drawn
4.	Draw and Guess should learn various shapes over continuous usage

# Scenarios
1.	User opens the Draw and Guess application and is taken to a drawing canvas configured with various buttons (Start, Exit…..) .
2.	Draw and Guess tells user what to draw by visual or audio text
3.	User is given a shape such as a square and the user draws the shape on the canvas.
4.	Draw and Guess visually or verbally makes guess at what the user has drawn

# Flask  Setup
Using Python 3.6
1. `pip install flask`
2. `export FLASK_APP=dng.py` or `set FLASK_APP=dng.py` (windows)
3. `flask run`
4. open `127.0.0.1:5000` in browser

# Using Version Control on pyCharm
In the bottom right hand corner of your IDE, you will see two arrows (One face north and the other facing south)
When clicking these arrows you will see various option.
1. Before coding ensure that under the local option, you have a branch that you have named
2. Ensure that branch is selected by clicking the arrow to the right of it and selecting checkout.
        ***This ensures that you have a clone on your local of the latest code
3. Inspect your current Remote option. You should see something similar to what is on github. /Dev is the current branch will continue to check into
4. After each night if you are comfortable with checking in your code to the /Dev branch then

                    A. Select VCS --> GIT ---> Commit File (commit early and often when coding)
                    B. You will presented with options to commit and push which I suggest you do but not necessary if you do not want to check into repo

