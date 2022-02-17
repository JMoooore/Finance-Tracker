/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export function seed(knex) {
  return knex('transactions')
    .truncate()
    .then(function () {
      return knex('transactions').insert([
        {user_id:1,category_id:1,payee_id:1,account_id:1,outflow:100,inflow:0,note:""},
        {user_id:2,category_id:4,payee_id:3,account_id:2,outflow:890,inflow:0,note:"test"},
        {user_id:3,category_id:5,payee_id:5,account_id:3,outflow:200,inflow:0,note:""},
        {user_id:4,category_id:6,payee_id:7,account_id:4,outflow:10,inflow:0,note:""},
        {user_id:5,category_id:8,payee_id:9,account_id:5,outflow:1300,inflow:0,note:"test2"},
        {user_id:6,category_id:10,payee_id:11,account_id:6,outflow:10,inflow:0,note:""},
        {user_id:1,category_id:2,payee_id:2,account_id:1,outflow:50,inflow:0,note:""},
        {user_id:2,category_id:3,payee_id:4,account_id:2,outflow:124,inflow:0,note:""},
        {user_id:3,category_id:5,payee_id:6,account_id:3,outflow:100,inflow:0,note:""},
        {user_id:4,category_id:7,payee_id:8,account_id:4,outflow:20,inflow:0,note:""},
        {user_id:5,category_id:9,payee_id:10,account_id:5,outflow:103,inflow:0,note:"test3"},
        {user_id:6,category_id:11,payee_id:12,account_id:6,outflow:145,inflow:0,note:""},
        {user_id:1,category_id:2,payee_id:1,account_id:1,outflow:23,inflow:0,note:""},
        {user_id:2,category_id:4,payee_id:3,account_id:2,outflow:1000,inflow:0,note:"testing how long of an input we should put into a note to see the result and how it affects the UI ..........."},
        {user_id:3,category_id:12,payee_id:5,account_id:3,outflow:12,inflow:0,note:""},
        {user_id:4,category_id:6,payee_id:7,account_id:4,outflow:460,inflow:0,note:""},
        {user_id:5,category_id:8,payee_id:9,account_id:5,outflow:123,inflow:0,note:"test4"},
        {user_id:6,category_id:10,payee_id:11,account_id:6,outflow:200,inflow:0,note:""},
        {user_id:1,category_id:1,payee_id:2,account_id:1,outflow:45,inflow:0,note:""},
        {user_id:2,category_id:3,payee_id:4,account_id:2,outflow:100,inflow:0,note:"test5"},
        {user_id:3,category_id:12,payee_id:6,account_id:3,outflow:345,inflow:0,note:""},
        {user_id:4,category_id:7,payee_id:8,account_id:4,outflow:100,inflow:0,note:""},
        {user_id:5,category_id:9,payee_id:10,account_id:5,outflow:1234,inflow:0,note:""},
        {user_id:6,category_id:11,payee_id:12,account_id:6,outflow:100,inflow:0,note:"test6"}
      ])
    })
};
