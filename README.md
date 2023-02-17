# Frontend

## TL;DR:

React Application written in TypeScript using sensible defaults and technology picks

- [x] Routing handled with [ReactLocation](https://react-location.tanstack.com/)
- [x] Styling handled with [TailwindCSS](https://tailwindcss.com/)
- [x] Sensible linting rules added through [ESLint](https://eslint.org/), [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), and [Commitlint](https://commitlint.js.org/#/)
- [x] API calls handled with [ReactQuery](https://react-query-v3.tanstack.com/)
- [x] API endpoint typesafety achieved using a common [Swagger](https://swagger.io/) spec. following OpenAPI standard between Client and Server
- [x] WebApp is deployed to Netlify using [GitHub actions](https://github.com/features/actions)

## Getting up and running

1. Clone the repository onto your machine
2. Navigate into the folder and run `yarn install`
3. Run the Application with `yarn dev` locally

### Making your changes

1. Make sure to be on the **develop** branch before you start working! You can do this by running `git checkout develop`
   in your terminal while in the project folder
2. Create your local branch to track your changes. Run `git checkout -b feature/Name_Of_Your_Branch`. The feature keyword can be
   replaced with other descriptive naming conventions such as WIP or CI, however, there shouldn't really be a need.
3. Start writing your code!!!
4. Once you finished a feature, go to your terminal and run `yarn lint`. This will flag any issues within your code that are
   not resolved. Make sure you fix all of these!
5. Once your linting shows no errors, you can go ahead and commit your changes by running `yarn commit` in your terminal. This will
   show you a Command Line Interface where you can navigate between options. Pick an appropriate commit type, then follow the prompts.
   Be attentive to the details here, as not following the criteria will throw an error and not let you commit your changes.
6. After your local changes have been committed, you can run `git push`. If it's your first commit to a new branch, it'll throw
   an error and print out the command you should use. Just copy-paste this back into your terminal and run it. This should sync your
   local changes up to the shared repository.

### Other good-to-knows

- When dealing with API changes, make sure you overwrite the current Swagger spec. located in `/src/api/swagger.yaml` with the updated
  copy. Once done and saved, you can run the `yarn generate` command which will create all the types for you to import and use.
- Please **DO NOT INSTALL** random dependencies into this project without prior discussion with the team, as it's very easy to bloat
  WebApps with unnecessary libraries. If interested, look packages up in [Bundlephobia](https://bundlephobia.com/), this site provides
  good insight into the load-time impacts of new packages on the application.
- If you have any questions do not hesitate to contact [me](nemethgergo02@gmail.com), or other members of the team!
