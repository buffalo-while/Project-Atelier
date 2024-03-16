<a id='readme-top'> </a>

<br />
<div align="center">
  <a href="https://github.com/buffalo-while/Project-Atelier">
    <!-- <img src="" alt="finance tracker logo" width="50" height="50" /> -->
  </a>
  <h3 align="center">
    Project Atelier E-commerce Page Redesign
  </h3>
  <p align="center">
    <br />
    <a href="https://github.com/buffalo-while/Project-Atelier"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#optimizations">Optimizations</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

## About

<div align="center">
    <h3>Client Portal</h3>
  <img src="./public/assets/pp-demo-2.gif" alt="project landing page image" width="600px" />
</div>

<br />
<p>
  Project Atelier is a full redesign of a product webpage, to deliver a modernized, dynamic and responsive web application utilizing the component React that is a web-developer to client file sharing and communication platform that is not just functional, but also intuitive and user-friendly, catering to clients who found existing services like Dropbox overly complex.
</p>

### Built With

![node.js](https://img.shields.io/badge/node-%23000000.svg?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-%23000000.svg?style=for-the-badge&logo=react&logoColor)
![Javacript](https://img.shields.io/badge/javascript-%23000000.svg?style=for-the-badge&logo=javascript)

<p align="right">
  (<a href="#readme-top">back to top</a>)
</p>

## Getting Started

<p>
    Instructions to setup Project Atelier on your local machine below.
</p>

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation for Development Environment

Clone the repo
   ```
   git clone https://github.com/buffalo-while/Project-Atelier
   ```

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
### Deployment
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

## Usage

Pixel Atelier is run on the designated port. It can also be accessed utilizing localhost:PORT directly in the browser.

Run linter: `npm run lint `

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

1. To be added

<!-- CONTRIBUTING -->

## Contributing

Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word!

<!-- CONTACT -->

## Contact

<h3 align='center'> Greg</h3>
<h4 align='center'>
  <a href="">Linkedin</a> |
  <a href="">GitHub</a>
</h4>
<h3 align='center'> James</h3>
<h4 align='center'>
  <a href="">Linkedin</a> |
  <a href="">GitHub</a>
</h4>
<h3 align='center'> Justin</h3>
<h4 align='center'>
  <a href="">Linkedin</a> |
  <a href="">GitHub</a>
</h4>
<h3 align='center'> Stephen</h3>
<h4 align='center'>
  <a href="https://www.linkedin.com/in/stephen-capper-49a77720/">Linkedin</a> |
  <a href="https://github.com/stephencapper">GitHub</a>
</h4>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Additional project details

### Git Workflow

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

### Making API requests

All API requests should be routed through the server, by making requests to url `/api/<endpoint>` where endpoint, paramaters, request method and request body are as specified by the Atelier API.

The server will add Authentication to the request based on github token included in .env file, before rerouting the request to the API and passing back the response provided by the the API.

### Rating and Reviews Module

#### getRatings function
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

