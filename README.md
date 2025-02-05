# oyeyemi-deborah-portfolio

## Steps to run the frontend app

- Clone the repo `git@github.com:theNimbleDev/oyeyemi-deborah-portfolio.git`
- Navigate into oyeyemi-deborah-portfolio directory i.e `cd oyeyemi-deborah-portfolio`
- Install the dependencies by running `npm install`
- Start the server with `npm run dev`

## Steps on how to submit a Pull Request

**1. Always start by pulling the latest changes:**
Before creating a new branch or working on existing code, ensure your local repository is up-to-date with the latest changes from the `develop` (or `main` if instructed) branch. This prevents merge conflicts and ensures you're working with the most recent codebase.

```bash
git checkout develop  # Or git checkout main
git pull origin develop # Or git pull origin main
```

**2. Create a new branch:**
Always create a new branch for your work. Never commit directly to the `develop` or `main` branches. Use a descriptive name for your branch, following the specified naming convention:

- New Feature: `feature/name-of-feature` (e.g., feature/user-authentication)
- Bug Fix: `bug-fix/name-of-bug-fix` (e.g., bug-fix/login-issue)
- Enhancement: `enhancement/name-of-enhancement` (e.g., enhancement/performance-optimization)

```bash
git checkout -b feature/name-of-what-you-are-working-on  # Example
```

**3. Make your changes:**
Implement your feature, bug fix, or enhancement. Ensure your code is well-formatted, tested, and adheres to the project's coding standards.

**4. Commit your changes:**
Commit your changes with clear and concise messages. Explain what you've changed and why.

```bash
git add . # or git add <specific files>
git commit -m "Added user authentication feature" # Example
```

**5. Push your branch:**
Push your newly created branch to the remote repository.

```bash
git push origin feature/name-of-what-you-are-working-on # Example
```

**6. Create a Pull Request:**
Go to the oyeyemi-deborah-portfolio repository on GitHub. You should see a prompt to create a Pull Request for your newly pushed branch. Click on it.

**7. Fill out the Pull Request template:**
Carefully fill out the PR template with all the required information. This includes:

- Title: A descriptive title for your PR.
- Description: A detailed explanation of the changes you've made, including the issue it addresses (if applicable).
- Checklist: Ensure you've checked all the boxes in the checklist, indicating that you've followed the project's guidelines.
- Screenshots (if applicable): Provide screenshots of the changes you've made, especially if they affect the user interface. This helps reviewers understand the impact of your changes. Include screenshots of your tests passing as well.

**8. Request Review:**
Once you've filled out the PR template, request a review from the appropriate reviewer(s). This will notify them that your PR is ready for review.

**9. Address Review Feedback:**
Reviewers may provide feedback on your PR. Address their comments and make the necessary changes. Push your changes to the same branch, and the PR will be automatically updated.

Note: The reviewer will merge the PR once review is completed
