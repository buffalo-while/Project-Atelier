# Project-Atelier

## Installation

To install this project in a dev environment you will need to have on your machine:
- Node.js
- npm

Create local .env and .config.js files
- Copy the example.env file, rename to .env, add you github credentials and preferred local port to use
- Copy the example.config.js file and rename to .config.js
- Make sure both files created are in the same top level directory as the example files

Run the following commands from the top level project directory:
```
# Install dependencies
npm install

# Start the server, and refresh when files are updated using nodemon
npm run server-dev

# Build the client side of the app and refresh when files are saved using webpack
npm run client-dev
```
## Deployment
To deploy in production:
- ensure node is installed in production instance
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
- clone repo to production instance
```
git clone https://github.com/buffalo-while/Project-Atelier.git
```
- navigate to ProjectAtilier root directory
- update example.env file to be .env and add your API tokens and port 3000
- run the following commands in ubuntu
```
npm install
npm run build
```

## Git Workflow

0. If first time working on the repo, git clone main branch from git to local machine
```
git clone https://github.com/buffalo-while/Project-Atelier.git
```

1. Optional: Make sure you are working from latest version of main
   - Note: alternative is to keep working from the most recent version of your feature branch, but this could lead to more conflicts to resolve when you eventually make pull request to merge into main
```
git checkout main
git pull origin main
```
2. Create or checkout branch for feature you will be working on - DO NOT WRITE CODE DIRECTLY IN MAIN BRANCH
```
git checkout -b <new-feature-branch>
```
or
```
git checkout <feature-branch>
```
3. Optional: Merge main branch into your working branch, and resolve any conflicts in your branch
   - if there are merge conflicts and you do not accept incoming changes only, consider submitting a pull request to make these changes in main before moving forward (see steps 5 to 11)
```
git merge main
```
4. Work/write code in feature branch until ready to submit to main
   - this could include creating or using any number of different branches and merging or rebasing commitsinto your feature branch

5. Make sure all you have added and committed all files that you want to include in your feature branch
```
git add <file-name-1> <file-name-2> <...>
git commit
```
6. Pull latest version of main, merge into your feature branch and resolve any conflicts
   - see steps 1-3

7. Push your feature branch commits to your feature branch in github
```
git push origin <feature-branch>
```
8. In Github, [make pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to main from your feature branch

9. Code review from at least one teammate will be required
   - Make sure your Trello user story and implementation cards are linked from the pull request, and that the implementation task is in the Staged for Review section of Trello
   - Any teammate can pick up a code review, and should join the Trello card and make a comment that they will be reviewing in the pull request to avoid duplication of effort by reviewers
   - If you want review from a specific teammate or from multiple teammates, coordinate with them directly and make this clear in the pull request so that other teammates do not review and/or complete the merge before the
   - Code reviews will generally be completed async

10. Address any feedback received by updating, committing and pushing code to github in your feature branch, or responding to reviewer questions as applicable
    - make sure to update the pull request so that the reviewer knows to review again

11. Resolve any merge conflicts if indicated in github, once code review is completed, commit and push your feature branch to Github
    - see steps 1-3

12. Complete the merge using the magical green button that will now show in the github pull request

13. Take a minute to celebrate your win, and then rinse and repeat

Additional Notes:
- Minimize conflicts and disruption of large code reviews by submitting PRs early and often
- That is not a license to break the site, verify that the page is still rendering correctly/without errors and no tests that were previously passing are failing at each stage of the pull request process, including after making changes based on code review and after resolving conflicts
- Mistakes could happen, teammates will seek to be forgiving if rollback of main to earlier version of git is necessary

## Making API requests

All API requests should be routed through the server, by making requests to url `/api/<endpoint>` where endpoint, paramaters, request method and request body are as specified by the Atelier API.

The server will add Authentication to the request based on github token included in .env file, before rerouting the request to the API and passing back the response provided by the the API.

## Rating and Reviews Module

### getRatings function
The getRatings function is designed to provide a rating stars react element as well as other rating and reviews meta data for a particular product for any module that needs it.

As such it is imported into App.jsx from where it can be passed as a prop to any module.

getRatings takes an argument of any productId string and a second optional argument of a css class name string, and returns a promise of an object with the following properties:
```
{
  totalReviews: <string>,
  meanRating: <string>,
  RatingStars: <react span element>,
  allMetaData: <object>
}
```
More information for each property:
- totalReviews
  - number of total reviews for the product, or
  - "N/A" if API request failed
- meanRating
  - mean (average) of all ratings, rounded to 1 decimal point, for the product, or
  - "N/A" if API request failed
- RatingStars
  - react element (span) with name "ave-rating-stars" and css class(es) named "stars" plus the css class name passed to the getRatings function if applicable
  - the element will display 5 star icons which are solid (filled) up to the meanRating rounded to nearest 0.25 with the remainder outline only, or
  - the element displays 'Unable to show rating' if the API request errored
- allMetaData
  - an object containing all reviews meta data for the product, or
  - an empty object if API request failed

