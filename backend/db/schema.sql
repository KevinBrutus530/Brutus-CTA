DROP DATABASE IF EXISTS fngersmash;
CREATE DATABASE fngersmash;

\c fngersmash;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);

CREATE TABLE tweets
(
    id SERIAL PRIMARY KEY,
    user_tweet_id VARCHAR REFERENCES users(id) ON DELETE Set Null,
    tweet TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(id, email)
VALUES('8wv','test8@test.com');

INSERT INTO tweets(id, user_tweet_id, tweet)
VALUES(1, '8wv', 'my first tweet')