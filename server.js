// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
app.use(cors());
app.use(express.json());
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.post('/reports', async (req, res) => {
  // req.body: {lat, lng, category, description, images[], date}
  // insert to PostGIS geography(Point)
  const { lat, lng, category, description } = req.body;
  const q = `INSERT INTO reports (category, description, geom) VALUES ($1,$2, ST_SetSRID(ST_MakePoint($3,$4),4326)) RETURNING id`;
  const r = await pool.query(q,[category,description,lng,lat]);
  res.json(r.rows[0]);
});

app.listen(4000, ()=> console.log('api listening 4000'));
