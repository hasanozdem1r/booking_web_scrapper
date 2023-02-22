# Base image ubuntu:latest
FROM python:3.9-slim-buster AS python

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_DEFAULT_TIMEOUT=100 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 \
    POETRY_VERSION=1.3.1

# Set working directory
WORKDIR /ufynd

FROM python AS project_dependencies
# Install Poetry 
RUN pip install "poetry==$POETRY_VERSION" 

# Copy poetry.lock and pyproject.toml
COPY poetry.lock pyproject.toml /ufynd/

# Install project dependencies 
RUN poetry config virtualenvs.create false && poetry install --no-dev

FROM project_dependencies AS booking_scraper
# Copy project files
COPY . /ufynd/

# Start Server
CMD ["sh", "-c", "poetry run python -m http.server &" ]
