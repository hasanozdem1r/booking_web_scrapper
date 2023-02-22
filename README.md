# Booking Scraper

This project is scraping hotel metadata from booking.com
## Local computer hardware specification
* OS: Ubuntu 22.04 jammy(on the Windows Subsystem for Linux)
* Kernel: x86_64 Linux 5.15.79.1-microsoft-standard-WSL2
* Shell: bash 5.1.16
* CPU: Intel Core i5-7200U @ 4x 2.712GHz
* GPU: NVIDIA GeForce 940MX
* RAM: 6728MiB / 9886MiB
## Prerequisites 

If you are planning to test this project on your local machine please make sure you have already installed following installations

- [pyenv](https://github.com/pyenv/pyenv) to manage multiple python versions
- [poetry](https://python-poetry.org/) to manage 3rd party dependencies properly
- vscode or any text editor
- pre-commit
- Rename html file name. Rename it to **Kempinski Hotel Bristol Berlin, Germany - Booking.com.html**
- docker (if you are planning to use docker)

## Installation

Install Python 3.9.7 and set 3.9.7 default version with [pyenv](https://github.com/pyenv/pyenv)
```bash
  pyenv install 3.9.7
  pyenv global 3.9.7
```
Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```

## Running Application (Local & Docker)
### Load HTML from LOCALHOST (OPTION 1)

1. Prepare localhost to run HTML file on local server (you are in project directory) (SWITCH TERMINAL1 - DO NOT CLOSE)
```bash
  poetry shell
  poetry install
  python -m http.server
```
2. Go to link [booking.com file](http://localhost:8000/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html)
3. Activate venv and install dependencies (you are in project directory) (SWITCH TERMINAL2)
```bash
  poetry env use 3.9.7
  poetry shell
  poetry install
```
4. Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```
5. Run booking_scrapper
```bash
  python entrypoint.py --url="http://localhost:8000/data/Kempinski%20Hotel%20Bristol%20Berlin%2C%20Germany%20-%20Booking.com.html"
```
6. Running unit tests
```bash
  pytest
```

### Load HTML from /data folder (OPTION 2)

1. Activate venv and install dependencies (you are in project directory) (TERMINAL1)
```bash
  poetry env use 3.9.7
  poetry shell
  poetry install
```
2. Set PYTHONPATH otherwise you might receive booking_scraper module is not found error
```bash
  export PYTHONPATH="$PWD"
```
3. Run booking_scrapper
```bash
  python entrypoint.py # variant 1
  python entrypoint.py --local-file-path=YOUR_FILE_PATH
```
4. Running unit tests
```bash
  pytest
```

### Load HTML from /data folder on Docker (OPTION 3)

1. Run **docker help** to make sure it's accessible (you are in project directory)
2. Build image from Dockerfile
```bash
  docker build -t booking_scraper .
```
2. Run docker container in interactive shell
```bash
  docker run -it -t booking_scraper /bin/bash
```
3. Run **pwd* command to see your working directory
4. Run **export PYTHONPATH="$PWD"** command to set PYTHONPATh
5. Run following commands to test
```bash
  python entrypoint.py --help
  python entrypoint.py 
  pytest .
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

**What is default hardware specification of GitHub Runner?**
* 2-core CPU (x86_64)
* 7 GB of RAM
* 14 GB of SSD space

## Examples

1. Running booking_scraper on local machine

[![booking_scraper on local machine](https://img.youtube.com/vi/5XjKTZiQEqU/0.jpg)](https://youtu.be/5XjKTZiQEqU)

2. Running boooking_scraper running on Docker

[![booking_scraper on local machine](https://img.youtube.com/vi/h7fPiqMBxqA/0.jpg)](https://youtu.be/h7fPiqMBxqA)