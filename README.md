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
