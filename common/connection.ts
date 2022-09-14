import pgPromise from 'pg-promise';

const pg = pgPromise({});

export const db = pg("postgres://postgres:1@localhost:5432/temp");