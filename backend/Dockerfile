FROM python:3.8.5-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

RUN pip install --upgrade pip

RUN apk add --no-cache jpeg-dev zlib-dev
RUN apk add --no-cache --virtual .build-deps build-base linux-headers

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /app
WORKDIR /app
COPY ./entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh"]


