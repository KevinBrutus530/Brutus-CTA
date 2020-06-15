DROP DATABASE IF EXISTS fngersmash;
CREATE DATABASE fngersmash;

\c fngersmash;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS likes;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    display_name TEXT not null UNIQUE,
    profile_pic VARCHAR,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tweets
(
    id SERIAL PRIMARY KEY,
    user_tweet_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    tweet TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_comments_id INTEGER REFERENCES users(id),
    post_comment_id INTEGER REFERENCES tweets(id),
    body TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    user_like_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    post_like_id INTEGER REFERENCES tweets(id) ON DELETE SET NULL
);

CREATE TABLE hashtags
(
    id SERIAL PRIMARY KEY,
    tag VARCHAR,
    search_post_id INT REFERENCES tweets(id)
);