Welcome to the Ooli exercise.\
Purpose: get to know these developer tools -- git, GitHub, and MS VSCode
1. We build and test the Ooli app locally (Windows 10 for me) in MS VSCode.
2. We bundle it up using git, then push it up to GitHub for deploying.
3. We delete the whole Ooli project, so we can repeat the exercise tomorrow.
<!--more-->
# I. Prerequisites
These 3 foundation pieces are free and easily available.

### A. Microsoft Visual Studio Code
1. INSTALL on your local Windows PC. Provides both editor and terminal.
### B. git
1. INSTALL on your local Windwos PC.
### C. GitHub
1. CREATE a GitHub personal account.

# II. What is Ooli?
1. Ooli is a simple game, very like Rock, Scissors, Paper.
2. It's for 2 players. In the app, it is a player vs computer.
3. Both human players put one hand behind their back.
4. Each player either 1. Extends the index finger only or 2. Makes a fist.
5. One player, the Caller, says either "Even" or "Odd".
6. Both then simultaneously show the hidden hand.
7. If the Caller said "Even" and the choices match, the Caller wins.
8. If the Caller said "Odd" and the choices don't match, the Caller wins.
9. Otherwise, the Caller loses.

# III. Create the Ooli project
### A. GitHub
1. CREATE or LogIn to your personal GitHub account
2. CREATE a new empty repo named Ooli
3. COPY the Quick Setup string (a URL) for this repository
NOTE: https://github.com/myrburrows/Ooli.git
### B. VS Terminal
1. cd ~/Downloads/repos/
2. git clone https://github.com/myrburrows/Ooli.git
3 cd ~/Downloads/repos/Ooli
4. git status
NOTE: "on branch main"
### C. VS Terminal
touch index.html
touch app.js
touch styles.css
# IV. Create the app
### A. VS Editor
1. OPEN folder ~/Downloads/repos/Ooli
2. EDIT index.html
3. ADD content to the 3 files per the "Ooli files" tab
### B. VS Live Server
1. RUN "Live Server" to open the Ooli app in a tab of your browser
2. TRY the Ooli app in all its many facets

# V. Deploy on GitHub
### A. VS Terminal
1. git add .
2. git commit -m "initial commit"
3. git push origin main
### B. GitHub
1. INSPECT on GitHub. Note that the 3 files are in the online repo.
2. Click on Settings, then Pages on the left
3. DEPLOY from a branch (main), and Save
4. CLICK link at "Your site is live at ____", appears after a couple of minutes

# VI. Delete Ooli project

# V. After noy using git for a long time, git commit --amend --reset-author --no-edit
