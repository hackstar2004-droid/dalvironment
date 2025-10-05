CREATE TABLE reports (
  id serial PRIMARY KEY,
  category text,
  description text,
  created_at timestamp default now(),
  nasa_check jsonb,
  ai_score jsonb,
  expert_review jsonb
);
-- geometry column
SELECT AddGeometryColumn('public','reports','geom',4326,'POINT',2);
CREATE INDEX idx_reports_geom ON reports USING GIST(geom);
