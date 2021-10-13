# Welcome to my multiverse bootcamp project files!

## Setup
Clone the repo, then

```
npm i
```
to install dependencies.

## Running tasks
Until I implement a more interactive method of running tasks, please simply run

```
node familyTree/
```

from the project's root directory and of course, replace `familyTree/` with the name of any task folder.

#### Testing
Similarly, for testing **specififc tasks**, you can simply execute
```
jest familyTree/
```
*Note: requires jest installed globally: `npm i -g jest`*

or for testing **all tasks**:
```
npm run test
```


#### Coverage
Additionally, generate coverage report with
```
npm coverage
```
and simply view the coverage folder in your browser, or via a local server.