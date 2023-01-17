import React from 'react';
import Picture from '../img/1-mysql.jpeg';

function Charactersets() {
  const code = String.raw`
  var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'password',
      database: 'Databasteknik'
    }
  });
  const { Model } = require('objection');
  Model.knex(knex);
  class Employee extends Model {
    static get tableName() {
      return 'Employee';
    }
  }
  const express = require('express');
  const app = express();
  app.get('/', (request, response) =&gt; {
    Employee.query().where('Job', 'Analytiker').then((results) =&gt; response.send(results));
  });
  app.listen(8080, () =&gt; {
    console.log('Example app listening at http://localhost:8080');
  });
  `;

  return (
    <article>
      <h1>Teckenuppsättningar – Character sets</h1>
      <img src={Picture} alt="view from error" />
      <div>
        <h2>
          Idag används UTF-8 för att undvika problem ska du se till samtliga program använder denna metod{' '}
        </h2>
        <p>Dock så är det inte alltid standard från början, i exempelvis windows</p>
        <ul>
          i terminalen kan du skriva in chcp för att se vilken teckenuppsättning som används, du kan ändra i
          terminalen genom att skriva in
          <li>chcp 65001</li>
          <li>chcp 1252</li>
        </ul>
      </div>
      <div>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
    </article>
  );
}

export default Charactersets;
