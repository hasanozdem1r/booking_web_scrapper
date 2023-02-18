# Python Project Template Repository


Repository structure is a crucial part of your project's architecture.

This repository is aiming to be template repository for every Python project.

## Prerequisites

This project requires following installations, please make sure you have already installed

- pyenv (manage multiple python versions)
- poetry (manage 3rd party dependencies properly)
- vscode or any text editor
- pre-commit

## Installation

Install Python 3.9.7 and set 3.9.7 default version
```bash
  pyenv install 3.9.7
  pyenv global 3.9.7
```
Activate venv and install dependencies (you are in project directory)
```bash
  poetry env use 3.9.7
  poetry shell
  poetry install
```
Set PYTHONPATH
```bash
  export PYTHONPATH="$PWD"
```

## Environment Preparation

1. Rename html file name. Rename it Kempinski Hotel Bristol Berlin, Germany - Booking.com.html
2. Prepare localhost to run HTML file on local server
```bash
  python -m http.server
```
3. Go to link [localhost](http://localhost:8000)