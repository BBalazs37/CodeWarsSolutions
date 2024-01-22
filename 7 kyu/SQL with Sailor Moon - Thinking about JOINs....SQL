--https://www.codewars.com/kata/5ab7a736edbcfc8e62000007/
/*
Return a results table - sailor_senshi, real_name, cat and school - of all characters, containing each character's high school, their civilian name and the cat who introduced them to their magical crime-fighting destiny.

Keep in mind some senshi were not initiated by a cat guardian and one is not in high school. The field can be left blank if this is the case.
*/

SELECT
  sailorsenshi.senshi_name AS sailor_senshi,
  sailorsenshi.real_name_jpn AS real_name,
  cats.name AS cat,
  schools.school AS school
FROM
  sailorsenshi 
  LEFT JOIN cats ON sailorsenshi.cat_id = cats.id 
  LEFT JOIN schools ON sailorsenshi.school_id = schools.id 