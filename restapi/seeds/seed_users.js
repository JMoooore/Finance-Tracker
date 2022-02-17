/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export function seed(knex) {
  return knex('users')
    .truncate() 
    .then(function () {
      return knex('users')
      .insert([
        {first_name:"Isaias", last_name:"Nuno", email:"in@email.com", password:"1234"},
        {first_name:"Kevin", last_name:"Heleodoro", email:"kh@email.com", password:"1234"},
        {first_name:"Nick", last_name:"Raffaele", email:"nr@email.com", password:"1234"},
        {first_name:"Fernando", last_name:"Curiel", email:"fc@email.com", password:"1234"},
        {first_name:"Paul", last_name:"Devlin", email:"pd@email.com", password:"1234"},
        {first_name:"John", last_name:"Moore", email:"jm@email.com", password:"1234"}
      ]);

    })
};
