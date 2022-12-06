BEGIN;

DROP TABLE
    IF EXISTS "book",
    "reader",
    "edition",
    "shelf",
    "author",
    "genre",
    "book_has_author",
    "book_has_publisher";

-- ---------------------------------------------------------------------------------------

-- table "edition"

-- ---------------------------------------------------------------------------------------

CREATE TABLE
    IF NOT EXISTS "publisher"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "mane" TEXT NOT NULL,
        "website" TEXT NOT NULL,
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "book"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "book"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "title" TEXT NOT NULL,
        "pages" INTEGER NOT NULL,
        "cover" TEXT,
        "publication" DATE,
        "ISBN" TEXT,
        "pusblisher_id" INTEGER REFERENCES "publisher"("id1"),
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    );

-- ---------------------------------------------------------------------------------------

-- table "reader"

-- ---------------------------------------------------------------------------------------

CREATE TABLE
    IF NOT EXISTS "reader"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "pseudo" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "author"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "genre"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "subgenre" TEXT,
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "genre"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "author"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "firstname" TEXT,
        "lastname" TEXT,
        "nationality" TEXT,
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "book_has_author"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "book_has_author"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "book_id" INTEGER REFERENCES "book"("id"),
        "author_id" INTEGER REFERENCES "author"("id"),
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "book_has_publisher"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "book_has_author"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "book_id" INTEGER REFERENCES "book"("id"),
        "author_id" INTEGER REFERENCES "author"("id"),
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    ),
    -- ---------------------------------------------------------------------------------------
    -- table "shelf"
    -- ---------------------------------------------------------------------------------------
CREATE TABLE
    IF NOT EXISTS "shelf"(
        "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
        "book_id" INTEGER REFERENCES "book"("id"),
        "user_id" INTEGER REFERENCES "reader"("id"),
        "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz
    )
COMMIT;