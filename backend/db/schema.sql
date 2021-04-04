DROP DATABASE IF EXISTS fngersmash;
CREATE DATABASE fngersmash;

\c fngersmash;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;

CREATE TABLE users
(
    id VARCHAR PRIMARY KEY,
    email VARCHAR,
    username VARCHAR UNIQUE,
    picture varchar DEFAULT 'https://pbs.twimg.com/media/EEU0IauVAAE88xo.png'
);

CREATE TABLE tweets
(
    id SERIAL PRIMARY KEY,
    user_tweet_id VARCHAR REFERENCES users(id) ON DELETE Set Null,
    tweet TEXT,
    created_at TIMESTAMP
    WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

    INSERT INTO users
        (id, email, username)
    VALUES('rgmRIgwVQcO3zljfzqqyGUkXgjm2', 'kevinbrutus@pursuit.org', 'BrutusTheFirst');

    INSERT INTO tweets
        (user_tweet_id, tweet)
    VALUES('rgmRIgwVQcO3zljfzqqyGUkXgjm2', 'my first tweet')