* postgres string connection(common/connection.ts)

*start server: (API server start at http://localhost:5000`)
- npm install 
- npm start


*script for database
-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id character varying(500) COLLATE pg_catalog."default" NOT NULL,
    email character varying(500) COLLATE pg_catalog."default" NOT NULL,
    password character varying(500) COLLATE pg_catalog."default" NOT NULL,
    "firstName" character varying(500) COLLATE pg_catalog."default",
    "lastName" character varying(500) COLLATE pg_catalog."default",
    "permissionLevel" bigint,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;


-- Table: public.news

-- DROP TABLE IF EXISTS public.news;

CREATE TABLE IF NOT EXISTS public.news
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 500 CACHE 1 ),
    title text COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    images character varying(100)[] COLLATE pg_catalog."default",
    created_by character varying(500) COLLATE pg_catalog."default",
    created date,
    updated date,
    category_id integer NOT NULL,
    summary text COLLATE pg_catalog."default",
    CONSTRAINT news_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.news
    OWNER to postgres;

-- Table: public.categories

-- DROP TABLE IF EXISTS public.categories;

CREATE TABLE IF NOT EXISTS public.categories
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 100 CACHE 1 ),
    code character varying(500) COLLATE pg_catalog."default" NOT NULL,
    name character varying(500) COLLATE pg_catalog."default",
    CONSTRAINT categories_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categories
    OWNER to postgres;