create table users (
    id serial primary key,
    login varchar(36),
    password varchar(36),
    login_id integer,
    foreign key login_id references room (reg_id)
);