# Python Project Template Repository


Repository structure is a crucial part of your project's architecture.

This repository is aiming to be template repository for every Python project.

## Prerequisites

This project requires following installations, please make sure you have already installed

- [pyenv](https://github.com/pyenv/pyenv) to manage multiple python versions
- [poetry](https://python-poetry.org/) to manage 3rd party dependencies properly
- vscode or any text editor
- pre-commit

## Installation

Install Python 3.9.7 and set 3.9.7 default version
```bash
  pyenv install 3.9.7
  pyenv global 3.9.7
```
Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```

## Running Application
### Load HTML from LOCALHOST (OPTION 1)

1. Rename html file name. Rename it to **Kempinski Hotel Bristol Berlin, Germany - Booking.com.html**
2. Prepare localhost to run HTML file on local server. (TERMINAL1 - DO NOT CLOSE)
```bash
  python -m http.server
```
3. Go to link [localhost](http://localhost:8000)
4. Activate venv and install dependencies (you are in project directory) (TERMINAL2)
```bash
  poetry env use 3.9.7
  poetry shell
  poetry install
```
5. Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```
6. Run booking_scrapper
```bash
  python entrypoint.py --url=http://localhost:8000/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html
```
7. Running unit tests
```bash
  pytest
```

### Load HTML from /data folder (OPTION 2)

1. Rename html file name. Rename it to **Kempinski Hotel Bristol Berlin, Germany - Booking.com.html**
2. Activate venv and install dependencies (you are in project directory) (TERMINAL1)
```bash
  poetry env use 3.9.7
  poetry shell
  poetry install
```
3. Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```
4. Run booking_scrapper
```bash
  python entrypoint.py # variant 1
  python entrypoint.py --local-file-path=YOUR_FILE_PATH
```
5. Running unit tests
```bash
  pytest
```

## CI/CD pipeline
A CI/CD pipeline is a series of task steps that must be performed in order to deliver a new version of software properly.
I've used for code hosting platform GitHub and for CI/CD GitHub Actions.
GitHub Actions allow users automate everything within the GitHub flow.

**What is our pipeline responsibility ?**
1. Install Python & Poetry
2. Install project dependencies (if install fail task fails)
3. Cache project dependencies to speed up workflow
4. Code quality check for black formatter (task fail if you did not format with black)
5. Running unittest with Pytest Framework

**What is hardware specification of GitHub Runner?**
* 2-core CPU (x86_64)
* 7 GB of RAM
* 14 GB of SSD space