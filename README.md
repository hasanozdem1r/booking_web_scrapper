# Python Project Template Repository


Repository structure is a crucial part of your project's architecture.

This repository is aiming to be template repository for every Python project.

## Considerations

When a potential clients or contributors visit on your project they see following things
* Repository name
* Repository description
* Rest of files (codes, licence and etc)

## Must Have

1. **LICENCE**: Lawyering up. Legal and binding contracts between the author and the user of a software component
2. **requirements.txt** or **pyproject.toml**: Managing dependencies
3. **./docs/project_doc.md**: Project documentation
4. **./tests/test.py**: Test suite
5. **Makefile**: A tool which controls the generation of executable and other non-source files from a program's source file
6. **README.md**: Brief description of your project
7. **.gittignore**:

## Should Have

1. **CODE_OF_CONDUCT.md**: A well-written code of conduct clarifies an organization's mission, values and principles, linking them with standards of professional conduct.
2. **CONTRIBUTING.md**:Provides potential project contributors with a short guide to how they can help with your project or study group.
3. **./.github/ISSUE_TEMPLATE/feature_request.md**: This used to track your project feature requests and discussions.
4. **./.github/ISSUE_TEMPLATE/bug_report.md**: This used to track your project bug reports and discussions.
5. **./.github/pull_request_template.md**: Project contributors will automatically see the template's contents in the pull request body.
6. **.pre-commit-config.yaml and .style.yapf**: Pre-commit hooks are often used to make sure code is linted and formatted properly before being published.
7. **./.github/workflows/build.yml**: To integrate and deploy code changes to a third-party cloud application platform as well as test, track, and manage code changes

## Footnotes

1. GitHub introduced default community health files to increase interaction of maintainer and contributor. Whenever new contributor want to contribute on the project they having a lot of questions. A lot of how and why questions. Contributors easily can integrate by following this files and contribute. From 1st item to 5th item are related GitHub health files. Please check out the files.

2. **First code written in the early 1950s by John Mauchly** and those times nobody was not looking for a robust code. The time we are living needs more attention and quality. I explored that after my deep research almost every company following style guides and hooks to make sure everything is going well. If you use style guide and pre-commit hooks you will be writing better quality codes.

3. DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity. **GitHub Actions** give to you chance to involve with DevOps features.

4. **requirements.txt** and **pyproject.toml** are used for Python packaging and dependency management. I can count a lot of reasons why Poetry over requirements.txt but please check both of them make your decision.
