import React from 'react';
import './Heading.css';
import './stylesheet.css';
import './navbar.css';
import CDACicon from './CDAC-icon.jpg';
import facebookicon from './facebook-icon.png';
import linkedinicon from './linkedin-icon.png';
import twittericon from './twitter-icon.png';



function Database()
{
{/*====================================================================================================*/}
    return (<div>
    <div className="row container-fluid">
      <div className="col-2 columnmodific">
          <ol>
            <li><a href="#Q1">MySQL Practice Questions</a></li>
						<li><a href="#Q2">MySQL Interview Questions</a></li>

              <hr/>
              <h5>Follow us on</h5>
            <a href="https://www.cdac.in/index.aspx?id=mumbai">
            <img alt="cdac-mumbai" src={CDACicon} width="10%" height="10%" style={{paddingLeft: '2%'}} />
            </a>
  
            <a href="https://www.facebook.com/cdacmumbai">
              <img alt="cdac-facebook" src={facebookicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>
              </a>
  
            <a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
              <img alt="cdac-linkedin" src={linkedinicon} width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>
  
            <a href="https://twitter.com/cdacmumbai?lang=en">
              <img alt="cdac-twitter" src={twittericon.png} width="10%" height="10%" style={{paddingLeft: '2%'}} />
              </a>
          <hr/>
          </ol>
      </div>
    {/*====================================================================================================*/}	
          <div className="col-10" className="add">
          <div class= "container section">
<p>
<h3>MySQL Practice Questions</h3><br/>
<h5> 1) What is MySQL? </h5><hr/>
Answer: MySQL is an open-source DBMS which is developed and distributed by Oracle
Corporation.<br/>
It is supported by most of the popular operating systems, such as Windows, Linux, etc. It
can be used to develop different types of applications but it is mainly used for developing
web applications.<br/>
MySQL uses GPL (GNU General Public License) so that anyone can download and
install it for developing those applications which will be published or distributed freely.
But if a user wants to develop any commercial application using MySQL then he/she will
need to buy the commercial version of MySQL.<br/><br/>

<h5> 2) What are the features of MySQL?</h5><hr/>
Answer: MySQL has several useful features that make it a popular database
management software.<br/>
Some important features of MySQL are mentioned below:<br/>
• It is reliable and easy to use too.<br/>
• It is a suitable database software for both large and small applications.<br/>
• Anyone can install and use it at no cost.<br/>
• It is supported by many well-known programming languages, such as
PHP, Java, C++, PERL, etc.<br/>
• It supports standard SQL (Structured Query Language).<br/>
• The open-source license of MySQL is customizable. Hence, a developer
can modify it according to the requirements of the application.<br/><br/>

<h5> 3) What is the default port number of MySQL?</h5><hr/>
Answer: The default port number of MySQL is 3306.<br/><br/>

<h5> 4) How can you find out the version of the installed MySQL? </h5><hr/>
Answer: The version of the installed MySQL server can be found out easily by running
the following command from the MySQL prompt.<br/>
mysql- SHOW VARIABLES LIKE “%version%”;<br/><br/>

<h5> 5) What are the advantages and disadvantages of using MySQL?</h5><hr/>
Answer: There are several advantages of MySQL which are making it a more popular
database system now.<br/>
Some significant advantages and disadvantages of MySQL are mentioned below.<br/>
Advantages:<br/>
• It is well-known for its reliable and secure database management system.
Transactional tasks of the website can be done more securely by using
this software.<br/>
• It supports different types of storage engines to store the data and it works
faster for this feature.<br/>
• It can handle millions of queries with a high-speed transactional process.<br/>
• It supports many advanced level database features, such as multi-level
transactions, data integrity, deadlock identification, etc.<br/>
• Maintenance and debugging processes are easier for this software.
Disadvantages:<br/>
• It is hard to make MySQL scalable.<br/>
• It is not suitable for a very large type of database.<br/>
• The uses of stored routines and triggers are limited to MySQL.<br/>
<br/>
<h5> 6) What is the function of myisamchk?</h5><hr/>
Answer: myisamchk is a useful database utility tool that is used to get information about
MyISAM database tables.<br/>
It is also used for checking, debugging, repairing and optimizing database tables. It is
better to use this command when the server is down or when the required tables are not
in use by the server.<br/>
Syntax:<br/>
myisamchk [OPTION] table_name…<br/>
The available options of this tool can be retrieved by using the following command.<br/>
myisamchk –help<br/>
To check or repair all MyISAM tables, the following command will be required for<br/>
executing from the database directory location.<br/>
myisamchk *.MYI<br/>

<h5> 7) What are the purposes of using ENUM and SET data types?</h5><hr/>
Answer: ENUM data type is used in the MySQL database table to select any one value
from the predefined list.<br/>
The value of a particular field can be restricted by defining the predefined list as the field
which is declared as ENUM will not accept any value outside the list.<br/>
The SET data type is used to select one or more or all values from the predefined list.
This data type can also be used to restrict the field for inserting only the predefined list of
values like ENUM.<br/>
Example:<br/>
Run MySQL server from the command prompt and execute the following SQL
commands to know the use of ENUM and SET data type.
The following SQL commands create a new database named ‘newdb’ and select the
database for use.<br/>
CREATE DATABASE newdb;<br/>
USE newdb;<br/>
The following SQL command will create a table named clients with the fields ENUM and
SET data type.<br/><br/>
CREATE TABLE clients (<br/>
 id INT AUTO_INCREMENT PRIMARY KEY,<br/>
 name VARCHAR(50),<br/>
 membership ENUM('Silver', 'Gold', 'Diamond'),<br/>
 interest SET('Movie', 'Music', 'Concert'));<br/><br/>
INSERT queries will create two records in the table. ENUM field only accepts data from
the defined list.
‘Premium’ value does not exist on the ENUM list. Hence, the value of the ENUM field
will be empty for the second record. SET can accept multiple values and both the data
will be inserted in the second record.<br/><br/>
INSERT INTO clients (name, membership,interest)<br/>
VALUES ('Sehnaz','Gold', 'Music'),<br/>
 ('Sourav','Premium', 'Movie,Concert');<br/>
SELECT * FROM clients;<br/><br/>

<h5>8) What are the differences between a primary key and a foreign key?</h5><hr/>
Answer: The database table uses a primary key to identify each row uniquely. It is
necessary to declare the primary key on those tables that require to create a relationship
among them. One or more fields of a table can be declared as the primary key.
When the primary key of any table is used in another table as the primary key or another
field for making a database relation, then it is called a foreign key.<br/>
The differences between these two keys are mentioned below:<br/>
• The primary key uniquely identifies a record, whereas foreign key refers to
the primary key of another table.<br/>
• The primary key can never accept a NULL value but foreign key accepts a
NULL value.<br/>
• When a record is inserted in a table that contains the primary key then it is
not necessary to insert the value on the table that contains this primary
key field as the foreign key.<br/>
• When a record is deleted from the table that contains the primary key then
the corresponding record must be deleted from the table containing the
foreign key for data consistency. But any record can be deleted from the
table that contains a foreign key without deleting a related record of
another table.<br/>
Example:<br/>
Two tables named manufacturers and items will be created after executing the
following two SQL commands.
Here, the primary key of the manufacturer’s table is used as a foreign key in
the items table with the field name manufacturer_id. Hence, the manufacturer_id field
will contain only those values that exist in the manufacturer’s table.<br/><br/>
CREATE TABLE manufacturers (<br/>
 id INT AUTO_INCREMENT PRIMARY KEY,<br/>
 name VARCHAR(50));<br/>
CREATE TABLE items (<br/>
 id INT AUTO_INCREMENT PRIMARY KEY,<br/>
 name VARCHAR(50),<br/>
 type VARCHAR(50),<br/>
 brand VARCHAR(50),<br/>
 manufacturer_id INT,<br/>
 FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id));<br/><br/>
 
 <h5> 9) What are the differences between CHAR and VARCHAR data types?</h5><hr/>
Answer: Both CHAR and VARCHAR data types are used to store string data in the field
of the table.<br/>
The differences between these data types are mentioned below:<br/>
• CHAR data type is used to store fixed-length string data and the
VARCHAR data type is used to store variable-length string data.<br/>
• The storage size of the CHAR data type will always be the maximum
length of this data type and the storage size of VARCHAR will be the
length of the inserted string data. Hence, it is better to use the CHAR data
type when the length of the string will be the same length for all the
records.<br/>
• CHAR is used to store small data whereas VARCHAR is used to store
large data.<br/>
• CHAR works faster and VARCHAR works slower.
Further Reading = MySQL Data Types<br/>
Example:<br/>
The following SQL statement will create a table named Customers. In this table, the data
type of name field is VARCHAR and the data type of phone field is CHAR.
The size of the name field will depend on the length of the inserted value. The size of
the phone field will always be 14 characters even if the length of the inserted value is
less than 14 characters.<br/><br/>
CREATE TABLE customers (<br/>
 id INT AUTO_INCREMENT PRIMARY KEY,<br/>
 name VARCHAR(50),<br/>
 phone CHAR(14))<br/><br/>

 <h5> 10) What is the purpose of using the TIMESTAMP data type?</h5><hr/>
Answer: A TIMESTAMP data type is used to store the combination of date and time
value which is 19 characters long.<br/>
The format of TIMESTAMP is YYYY-MM-DD HH:MM: SS. It can store data from ‘1970-
01-01 00:00:01’ UTC to ‘2038-01-19 03:14:07’ UTC. By default, the current date and
time of the server get inserted in the field of this data type when a new record is inserted
or updated.<br/><br/>

<h5> 11) What is the difference between mysql_fetch_array() and ysql_fetch_object()
?</h5><hr/>
Answer: Both mysql_fetch_array() and mysql_fetch_object() are built-in methods of
PHP to retrieve records from MySQL database table.
The difference between these methods is that mysql_fetch_array() returns the result set
as an array and mysql_fetch_object() returns the result set as an object.<br/>
Example:<br/><br/>
$result = mysql_query("SELECT id, name FROM clients");<br/>
//using mysql_fetch_array()
while ($row = mysql_fetch_array($result, MYSQL_NUM)) <br/>

 printf("ID: %s Name: %s", $row[0], $row[1]);<br/>

//using mysql_fetch_object()<br/>
while ($row = mysql_fetch_object($result)) <br/>
 printf("ID: %s Name: %s", $row-&amp;gt;id, $row-&amp;gt;name);<br/>

<br/><br/>
<h5>12) How can you filter the duplicate data while retrieving records from the
table?</h5><hr/>
Answer: A DISTINCT keyword is used to filter the duplicate data from the table while
retrieving the records from a table.<br/>
Example:<br/>
The following SQL command shows all the records of the items table. The output shows
that the table contains duplicate values in the Type field.<br/>
SELECT * from items;<br/>
The following SQL command will display the values of the type field by removing
duplicate values.<br/>
SELECT DISTINCT type from items;<br/><br/>

<h5> 13) What is the difference between NOW() and CURRENT_DATE()?</h5><hr/>
Answer: Both NOW() and CURRENT_DATE() are built-in MySQL methods. NOW() is
used to show the current date and time of the server and CURRENT_DATE() is used to
show only the date of the server.<br/>
SELECT now();<br/>
SELECT current_date();<br/><br/>

<h5> 14) Which statement is used in a select query for partial matching?</h5><hr/>
Answer: REGEXP and LIKE statements can be used in a SELECT query for partial
matching. REGEXP is used to search records based on the pattern and LIKE is used to
search any record by matching any string at the beginning or end or middle of a
particular field value.<br/>
Example:<br/>
First, check the existing records of the ‘clients’ table by executing the SELECT query.<br/>
SELECT * FROM clients;<br/>
Run SELECT query with REGEXP clause to search those records from
the clients where the client name starts with ‘S’<br/>
SELECT * FROM clients WHERE name REGEXP "^S";<br/>
Run SELECT query with LIKE clause to search those records from the clients where the
client name starts with ‘A’<br/>
SELECT * FROM clients WHERE name LIKE "A%";<br/><br/>

<h5> 15) Which MySQL function is used to concatenate string?</h5><hr/>
Answer: CONCAT() function is used to combine two or more string data. The use of this
function is here with an example.<br/>
Example:<br/>
The following SELECT query with CONCAT() function will combine five words,
‘Welcome ‘, ‘to’, ‘SoftwareTestingHelp’,’.’ and ‘com’.<br/>
SELECT CONCAT('Welcome ',to ','SoftwareTestingHelp','.',com');<br/>
CONCAT() function can be used on any table as well. The following SELECT query will
show the output by combining two fields, brand and type of items table.<br/>
SELECT CONCAT(brand,'=',type) from items;<br/><br/>

<h5> 16) How can you change the name of any existing table by using the SQL
statement?</h5><hr/>
Answer: The following SQL command is used to rename an existing table of the
database.<br/>
RENAME TABLE table_name TO new_name<br/>
Example:<br/>
The following command will show the table list of the newdb database.<br/>
SHOW TABLES;<br/>
The following rename command will rename the table items by new name products.<br/>
RENAME TABLE items TO products;<br/>
SHOW TABLES;<br/><br/>

<h5> 17) How can you retrieve a portion of any column value by using a SELECT
query?</h5><hr/>
Answer: SUBSTR() function is used to retrieve the portion of any column. The use of
this function is explained here with an example.<br/>
Example:<br/>
Here, the first SELECT command is used to show all the records of the Products table
and the second SELECT command is executed using SUBSTR function and that prints
only the first five characters of the name field.<br/>
SELECT * FROM products;<br/>
SELECT SUBSTR(name,1,5) FROM products;<br/><br/>

<h5> 18) What is the purpose of using a HEAP table?</h5><hr/>
Answer: The table which uses a hashed index and stores in the memory is called the
HEAP table. It works as a temporary table and it uses the indexes that make it faster
than another table type.<br/>
When MySQL crashes for any reason then all the data stored in this table can be lost. It
uses fixed-length data types. Hence BLOB and TEXT data types are not supported by
this table. It is a useful table for those MySQL tasks where speed is the most important
factor and temporary data is used.<br/><br/>

<h5> 19) How can you add and remove any column of a table?</h5><hr/>
Answer: The syntax for adding any column in an existing table is shown below.<br/>
ALTER TABLE table_name ADD COLUMN column_name column_definition [FIRST|AFTER existing_column]<br/>
Example:<br/>
DESCRIBE command is used to show the structure of the products table.<br/>
DESCRIBE products;<br/>
The following ALTER command with ADD COLUMN clause will add a new field named
‘price’ in the table products.<br/>
ALTER TABLE products ADD COLUMN price DECIMAL(5,2);<br/>
DESCRIBE products;<br/>
The syntax for removing any column from an existing table is shown below.<br/>
ALTER TABLE table_name DROP COLUMN column_name;<br/>
Example:<br/>
The following ALTER command with a DROP COLUMN clause will remove the field
named ‘brand’ in the table ‘products’.<br/>
ALTER TABLE products DROP COLUMN brand;<br/>
DESCRIBE products;<br/><br/>

<h5>20) What is an index? How can an index be declared in MySQL?</h5><hr/>
Answer: An index is a data structure of a MySQL table that is used to speed up the
queries.<br/>
It is used by the database search engine to find out the records faster. One or more
fields of a table can be used as an index key. Index key can be assigned at the time of
table declaration or can be assigned after creating the table.<br/>
Example:<br/>
username and email fields are set as the index in the following create table statement.<br/><br/>
CREATE TABLE users(<br/>
 username VARCHAR(50) PRIMARY KEY,<br/>
 email VARCHAR(50) NOT NULL,<br/>
 password VARCHAR(50) NOT NULL,<br/>
 INDEX (username, email));<br/><br/>
The following command will show the index key information of the ‘users’ table.<br/>
SHOW INDEXES FROM users;<br/><br/>

<h5>21) What is meant by a decimal (5,2)?</h5><hr/>
Answer: A decimal data type is used in MySQL to store the fractional data.
The meaning of decimal (5,2) means that the total length of the fractional value is 5. The
field can contain 3 digits before the decimal point and 2 digits after the decimal point. If a
user adds any value larger than the defined length then it will insert 999.99 in the field.
The use of this data type is explained in the following example.<br/>
Example:<br/>
In the following insert query, 789.56 is inserted in the price field. This value is less than
1000 and the total digits with the fractional part are 5. So, this value is valid for this field.<br/><br/>
INSERT INTO products (type, name, price, manufacturer_id)<br/>
VALUES ('Mobile', 'iPhone 8', 789.56, 1);<br/>
SELECT * FROM products;<br/>
In the following insert query, 34789.567 is set for the price field. Then this value is
greater than 1000 and the total digits with fractional parts are 8. So, the default value
999.99 is inserted in the place of 34789.567.<br/>
INSERT INTO products (type, name, price, manufacturer_id)<br/>
VALUES('TV','Sony 32" Smart TV',34789.567, 2);<br/>
SELECT * FROM products;<br/><br/>

<h5>22) What is the view? How can you create and drop view in MySQL?</h5><hr/>
Answer: A view works as a virtual table that is used to store query and returns a result
set when it is called. An updatable view is also supported by MySQL.
How a view can be created or deleted in MySQL are shown in the following examples.<br/>
Create View Example:<br/>
The following statement will create a view file named ‘client_list’ based on the
table clients.<br/>
CREATE VIEW `client_list` AS SELECT `name` as 'Name', `membership` as 'Membership' FROM `clients`;<br/>
SELECT statement will display the records of client_list value.<br/>
SELECT * FROM client_list;<br/>
DROP View Example:<br/>
The drop view statement will delete the view file. The SELECT query will show an error
after deleting the view.<br/>
DROP VIEW client_list;<br/>
SELECT * FROM client_list;<br/><br/>

<h5>23) What is the function of mysqldump?</h5><hr/>
Answer: mysqldump is a useful utility tool of MySQL that is used to dump one or more
or all databases from the server for backup or transfer to another database server.<br/>
Syntax:<br/><br/>
For a single database,<br/>
mysqldump [OPTIONS] db_name [TABLES]<br/>
For multiple databases,<br/>
mysqldump [OPTIONS] –databases DB1 [DB2 DB3…]<br/>
For all databases,<br/>
mysqldump [OPTIONS] –all-databases<br/><br/>
Example:<br/>
The following command will create a dump of the ‘newdb’ database and export the
content of the database in the file, newdb.sql.<br/>
mysqldump --databases newdb - newdb.sql<br/><br/>

<h5>24) How can you change the password of a MySQL user?</h5><hr/>
Answer: SET PASSWORD statement is used to change the password of a MySQL
user.<br/><br/>
Syntax:<br/>
SET PASSWORD FOR ‘username’@’hostname’ = PASSWORD(‘password’);<br/>
Example:<br/><br/>
The following statement will set or change the root password.<br/>
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');<br/><br/>

<h5>25) What is the difference between UNIX TIMESTAMP and MySQL
TIMESTAMP?</h5><hr/>
Answer: Both UNIX TIMESTAMP and MySQL TIMESTAMP are used to represent the
date and time value. The main difference between these values is that UNIX
TIMESTAMP represents the value by using 32-bits integers and MySQL TIMESTAMP
represents the value in the human-readable format.<br/><br/>
Example:<br/>
A UNIX time value is used by FROM_UNIXTIME function in the SELECT query to get
the date and time value in the human-readable format.<br/>
SELECT FROM_UNIXTIME (1596222320) AS 'MySQLTIMESTAMP';<br/>
Date and time value is used by UNIX_TIMESTAMP function in the SELECT query to get
the date and time value in the UNIX format.<br/>
SELECT UNIX_TIMESTAMP ('2018-12-25 09:45:40') AS 'UNIXTIMESTAMP';<br/><br/>

<h5>26) How can you import tables from a SQL file into a database by using the
MySQL client?</h5><hr/>
Answer: Database tables can be imported into a database from a SQL file by using the
following MySQL statement.<br/>
mysql -u username -p database_name leftarrow sql_filename <br/> <br/>
Example:<br/>
If the root user’s password is empty, then the following command will import tables from
‘newdb.sql’ file into the database `mydb`.<br/>
mysql -u root mydb leftarrow newdb.sql<br/><br/>

<h5>27) What is the difference between the Primary key and the Unique key?</h5><hr/>
Answer: Unique data is stored in the primary key and unique key fields. The primary key
field never accepts NULL value but a unique key field accepts a NULL value.<br/><br/>
Example:<br/>
In the users’ table, the id field is the primary key and the email field is a unique key.
Two records are inserted in the table where the email field is NULL for the 2nd record.
The records are inserted properly as the unique field supports a NULL value.<br/><br/>
INSERT INTO users (username, email, password)<br/>
VALUES('admin', 'admin@example.com', '7890'),<br/>
 ('staff', 'NULL', '1234');<br/>
SELECT * FROM users;<br/><br/>

<h5>28) What is the purpose of using the IFNULL() function?</h5><hr/>
Answer: IFNULL() function takes two arguments. It returns the first argument value if
the value of the first argument is not NULL and it returns the second argument if the
value of the first argument is NULL.<br/><br/>
Example:<br/>
Here, the first argument of the IFNULL function is not NULL. So, the output is the first
argument value.<br/>
SELECT IFNULL ("Tutorial", "fahmidasclassroom.com");<br/>
Here, the first argument of the IFNULL function is NULL. So, the output is NULL.<br/>
SELECT IFNULL ("NULL", "fahmidasclassroom.com");<br/><br/>

<h5>29) What is a join? Explain the different types of MySQL joins.</h5><hr/>
Answer: The SQL statement that is used to make a connection between two or more
tables based on the matching columns is called a join. It is mainly used for complex
queries.<br/><br/>
Different types of SQL joins are mentioned below:<br/>
• Inner Join: It is a default join. It returns records when the values match in
the joining tables.<br/>
• Left Outer Join: It returns all the records from the left table based on the
matched records from the right table.<br/>
• Right Outer Join: It returns all the records from the right table based on
the matched records from the left table.<br/>
• Full Outer Join: It returns all the records that match from the left or right
table.<br/><br/>
Example:<br/>
Two tables, manufacturers and products are used in this example to show the use of
INNER JOIN. Here, SELECT queries are used to show the current records of these two
tables.<br/>
SELECT * FROM manufacturers;<br/>
SELECT * FROM products;<br/>
INNER JOIN is used in the following SELECT query where all the id and name of the
products table will be displayed based on matching manufacturer_id of
the products with an id of the manufacturer’s table.<br/>
SELECT products.id, products.name<br/>
FROM products<br/>
INNER JOIN manufacturers ON manufacturers.id= products.manufacturer_id;<br/><br/>

<h5>30) How can you retrieve a particular number of records from a table?</h5><hr/>
Answer: LIMIT clause is used with the SQL statement to retrieve a particular number of
records from a table. From which record and how many records will be retrieved are
defined by the LIMIT clause.<br/><br/>
Syntax:<br/>
LIMIT starting_number, number_of_rows<br/><br/>
Example:<br/>
Products table has 5 records which are displayed by the first SELECT query and the
second SELECT query is used to display the records from 2nd to 3rd by using LIMIT 1, 2.<br/><br/>
SELECT * FROM products;<br/>
SELECT * FROM products LIMIT 1, 2;
<br/><br/>
<h5>31) How can you export the table as an XML file in MySQL? </h5><br/>
Answer: ‘-X’ option is used with `mysql` command for exporting the file as XML. The
following statement will export any table from a database as an XML file.<br/>
mysql -u username -X -e “SELECT query” database_name<br/><br/>
Example:<br/>
The following command will export the data of the items table into an xmlData.xml file.<br/>
mysql -u root -X -e "SELECT * from products" newdb rightarrow xmlData.xml<br/><br/>

<h5>32) What is a CSV table?</h5><hr/>
Answer: MySQL table that uses the CSV storage engine is called a CSV table. Data are
stored as comma-separated values in the CSV table. MySQL server creates a data file
with an extension ‘.csv’ to store the content of the CSV table.<br/><br/>
Example:<br/>
The following create statement will create a CSV file named book.<br/>
CREATE TABLE book ( id INT NOT NULL) ENGINE=CSV;<br/><br/>

<h5>33) How can you calculate the sum of any column of a table?</h5><hr/>
Answer: SUM() function is used to calculate the sum of any column.<br/><br/>
Syntax:<br/>
SUM(DISTINCT expression)<br/><br/>
Example:<br/>
Products table has a numeric field named, price. In this example, the SUM() function is
used to calculate the total value of the price field.<br/>
SELECT * FROM products;<br/>
SELECT SUM(price) as total FROM products;<br/><br/>

<h5>34) How can you count the total number of records of any table?</h5><hr/>
Answer: COUNT() function is used to count the total number of records of any table.<br/>
Syntax:<br/>
COUNT(expression)<br/>
Example:<br/>
The following SELECT query is used to count the total number of records of
the products table.<br/>
SELECT COUNT(*) as `Total Records` FROM products;
<br/><br/>
<h5>35) Explain the difference between DELETE and TRUNCATE.</h5><hr/>
Answer: Both DELETE and TRUNCATE commands are used to delete the records from
any database table. However, there are some significant differences between these
commands. If the table contains the AUTO_INCREMENT PRIMARY KEY field then the
effect of these commands can be shown properly.<br/>
Two differences between these commands are mentioned below.<br/><br/>
1. DELETE command is used to delete a single or multiple or all the records
from the table. The TRUNCATE command is used to delete all the records
from the table or make the table empty.<br/>
2. When DELETE command is used to delete all the records from the table
then it doesn’t re-initialize the table. So, the AUTO_INCREMENT field
does not count from one when the user inserts any record.
But when all the records of any table are deleted by using TRUNCATE command then it
re-initializes the table and a new record will start from one for the AUTO_INCREMENT
field.<br/><br/>
Example:<br/>
The previously created user table is used in this example.
First, the SELECT query will show all the records of the user’s table. DELETE query will
delete all the records from the user’s table. INSERT query will insert a new record into
the user’s table. After insert, if the SELECT query executes again then it will be shown
that a new id is calculated after the deleted id.<br/><br/>
SELECT * FROM users;<br/>
DELETE FROM users;<br/>
INSERT INTO users (username, email)<br/>
VALUES ('Durjoy', 'durjoy@gmail.com');<br/>
SELECT * FROM users;<br/><br/>
Currently, there are two records in the user’s table and when a new record is inserted
after deleting all the records then the new id is 3, and not 1.
The same queries are executed in this part, just used the TRUNCATE statement in
place of DELETE. It is shown that the id value of the new record is 1.<br/><br/>
TRUNCATE table users;<br/>
INSERT INTO users (username, email)<br/>
VALUES ('Farheen', 'farheen@gmail.com');<br/>
SELECT * FROM users;<br/><br/>

<h5>36) What is a storage engine? What are the differences between InnoDB and
MyISAM engines?</h5><hr/>
Answer: One of the major components of the MySQL server is the storage engine for
doing different types of database operations. Each database table created is based on
the specific storage engine.
MySQL supports two types of storage engines i.e transactional and nontransactional. InnoDB is the default storage engine of MySQL which is transactional.
MyISAM storage engine is a non-transactional storage engine.
The differences between InnoDB and MyISAM storage engines are discussed
below:<br/><br/>
• MyISAM supports the FULLTEXT index but InnoDB doesn’t support the
FULLTEXT index.<br/>
• MyISAM is faster and InnoDB is slower.<br/>
• InnoDB supports ACID (Atomicity, Consistency, Isolation, and Durability)
property but MyISAM doesn’t.<br/>
• InnoDB supports row-level locking and MyISAM supports table-level
locking.<br/>
• InnoDB is suitable for large database and MyISAM is suitable for a small
database.<br/><br/>

<h5>37) What is a transaction? Describe MySQL transaction properties.</h5><hr/>
Answer: When a group of database operations is done as a single unit then it is called a
transaction. If any task of the transactional tasks remains incomplete then the
transaction will not succeed. Hence, it is mandatory to complete all the tasks of a
transaction to make the transaction successful.
A transaction has four properties which are known as ACID property. These properties
are described below.<br/><br/>
• Atomicity: It ensures that all the tasks of a transaction will be completed
successfully otherwise all the completed tasks will be rolled back to the
previous state for any failure.<br/>
• Consistency: It ensures that the database state must be changed
accurately for the committed transaction.<br/>
• Isolation: It ensures that all the tasks of a transaction will be done
independently and transparently.<br/>
• Durability: It ensures that all the committed transaction is consistent for
any type of system failure.<br/><br/>

<h5>38) What are the functions of commit and rollback statements?</h5><hr/>
Answer: Commit is a transaction command that executes when all the tasks of a
transaction are completed successfully. It will modify the database permanently to
confirm the transaction.<br/>
Syntax:<br/>
COMMIT;<br/>
Rollback is another transactional command that executes when any of the transactional
tasks become unsuccessful and undoes all the changes that are made by any
transactional task to make the transaction unsuccessful.<br/>
Syntax:<br/>
ROLLBACK;<br/><br/>

<h5>39) What is the difference between MyISAM Static and MyISAM Dynamic?</h5><hr/>
Answer: MyISAM Static and MyISAM dynamic are the variations of the MyISAM storage
engine. The differences between these tables are mentioned below.<br/>
• All the fields of MyISAM static table are of a fixed length and MyISAM
dynamic table accepts variable length fields such as BLOB, TEXT, etc.<br/>
• After data corruption, it is easier to restore the MyISAM static table than
MyISAM dynamic table.<br/><br/>

<h5>40) What is a trigger? How you can create a trigger in MySQL?</h5><hr/>
Answer: One of the important features of the MySQL database is a trigger that executes
automatically when a particular database event occurs.
It fires after or before the execution of an insert or update or deletes a statement. It is a
very useful option when a database user wants to do some database operations
automatically.<br/><br/>
Trigger Example:<br/>
If you want to delete the items of a supplier from the items table automatically after
deleting the entry of the particular supplier from the ‘suppliers’ table then write the
trigger in the following way.<br/><br/>
Example:<br/>
This is an example of after delete trigger that will fire automatically when any record is
removed from the manufacturer table and deletes all the records from
the products table where the deleted id of the manufacturer table matches with
the manufacturer_id field of the products table.<br/><br/>
DELIMITER //<br/>
CREATE TRIGGER manufacturer_after_delete<br/>
AFTER DELETE<br/>
ON manufacturers FOR EACH ROW<br/>
BEGIN<br/>
DELETE FROM products WHERE products.manufacturers_id = OLD.id;<br/>
END;
//<br/><br/>

</p>
                </div>

                <div class= "container section">
                    <p>
                        <a name="Q2"><h3 style="color: teal;">MySQL Interview Questions</h3></a><hr/>
                     <h6>Q1.how to do login in mysql with unix shell</h6>
                        Answers
                        :
                        By below method if password is pass and user name is root<br/>
                        # [mysql dir]/bin/mysql -h hostname -u root -p pass<br/>
                        <hr/>    <h6>Q2.how you will Create a database on the mysql server with unix shell</h6>
                        Answers :
                       
                        mysql create database databasename;<br/>
                        <hr/>    <h6>Q3.how to list or view all databases from the mysql server.</h6>
                        Answers :
                      
                        mysql show databases;<br/>
                        <hr/>    <h6>Q4.How Switch (select or use) to a database.</h6>
                        Answers :
                      
                        mysql use databasename;<br/>
                        <hr/>    <h6> Q5.How To see all the tables from a database of mysql server.</h6>
                        Answers :
                       
                        mysql show tables;<br/>
                        <hr/>    <h6>Q6.How to see table's field formats or description of table .</h6>
                        Answers :
                       
                        mysql describe tablename;<br/>
                        <hr/>    <h6> Q7.How to delete a database from mysql server.</h6>
                        Answers :
                  
                        mysql drop database databasename;<br/>
                        <hr/>    <h6>Q8.How we get Sum of column</h6>
                        Answers :
                        
                        mysql SELECT SUM(*) FROM [table name]; <br/>
                        <hr/>    <h6> Q9.How to delete a table</h6>
                        Answers :
                       
                        mysql drop table tablename;<br/>
                        <hr/>    <h6> Q10.How you will Show all data from a table.</h6>
                        Answers :
                        mysql SELECT * FROM tablename;<br/>
                        <hr/>    <h6>
                        Q11.How to returns the columns and column information pertaining to the
                        designated table</h6>
                        Answers :
                         mysql show columns from tablename;<br/>
                         <hr/>    <h6>Q12.How to Show certain selected rows with the value "pcds"</h6>
                        Answers :
                         mysql SELECT * FROM tablename WHERE fieldname = "pcds";<br/>
                         <hr/>     <h6>
                        Q13.How will Show all records containing the name "sonia" AND the phone
                        number ' 9876543210'</h6>
                        Answers :
                    
                        mysql SELECT * FROM tablename WHERE name = "sonia" AND phone_number = '
                        9876543210';<br/>
                        <hr/>    <h6>
                        Q14.How you will Show all records not containing the name "sonia" AND the
                        phone number ' 9876543210' order by the phone_number field.</h6>
                        Answer :
                        
                        mysql SELECT * FROM tablename WHERE name != "sonia" AND phone_number = '
                        9876543210' order by phone_number;<br/>
                        <hr/>    <h6>
                        Q15.How to Show all records starting with the letters 'sonia' AND the phone
                        number ' 9876543210'</h6>
                        Answers :
                        
                        mysql SELECT * FROM tablename WHERE name like "sonia%" AND phone_number
                        = ' 9876543210';<br/>
                        <hr/>    <h6>
                        Q16.How to show all records starting with the letters 'sonia' AND the phone
                        number ' 9876543210' limit to records 1 through 5.</h6>
                        Answers :
                        
                        mysql SELECT * FROM tablename WHERE name like "sonia%" AND phone_number
                        = ' 9876543210' limit 1,5; <br/>
                     
                     
                        <hr/>    <h6>Q17.How you will Show unique records.</h6>
                        Answer :
                         mysql SELECT DISTINCT columnname FROM tablename;<br/>
                         <hr/>     <h6>
                        Q18.how we will Show selected records sorted in an ascending (asc) or
                        descending (desc)</h6>
                        Answer :
                     
                        mysql SELECT col1,col2 FROM tablename ORDER BY col2 DESC;
                        mysql SELECT col1,col2 FROM tablename ORDER BY col2 ASC;<br/>
                        <hr/>    <h6>Q19.how to Return total number of rows.</h6>
                        Answers :
                         mysql SELECT COUNT(*) FROM tablename;<br/>
                         <hr/>    <h6> Q20.How to Join tables on common columns.</h6>
                        Answer :
                       
                        mysql select lookup.illustrationid, lookup.personid,person.birthday from lookup left
                        join person on lookup.personid=person.personid=statement to join birthday in person
                        table with primary illustration id<br/>
                        <hr/>    <h6>
                        Q21.How to Creating a new user. Login as root. Switch to the MySQL db. Make the
                        user. Update privs.</h6>
                        Answer :
                    
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql INSERT INTO user (Host,User,Password)<br/>
                        VALUES('%','username',PASSWORD('password'));<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6>Q22.How to Change a users password from unix shell.</h6>
                        Answers :
                        
                        # [mysql dir]/bin/mysqladmin -u username -h hostname.blah.org -p password 'newpassword'<br/>
                        <hr/>    <h6>
                        Q23.How to Change a users password from MySQL prompt. Login as root. Set the
                        password. Update privs.</h6>
                        Answer :
                     
                        # mysql -u root -p<br/>
                        mysql SET PASSWORD FOR 'user'@'hostname' = PASSWORD('passwordhere');<br/>
                        mysql flush privileges;<br/>
                        <hr/>     <h6>Q24.How to Recover a MySQL root password. Stop the MySQL server process.
                       
                        Start again with no grant tables. Login to MySQL as root. Set new password.
                        Exit MySQL and restart MySQL server.</h6>
                        Answer :
                        # /etc/init.d/mysql stop<br/>
                        # mysqld_safe --skip-grant-tables &<br/>
                        # mysql -u root<br/>
                        mysql use mysql;<br/>
                        mysql update user set password=PASSWORD("newrootpassword") where
                        User='root';<br/>
                        mysql flush privileges;<br/>
                        mysql quit
                        # /etc/init.d/mysql stop
                        # /etc/init.d/mysql start<br/>
                        <hr/>    <h6>Q25.How to Set a root password if there is on root password.</h6>
                        Answer :
                        # mysqladmin -u root password newpassword<br/>
                        <hr/>    <h6>Q26.How to Update a root password.</h6>
                        Answer :
                        # mysqladmin -u root -p oldpassword newpassword<br/>
                        <hr/>    <h6>
                        Q27.How to allow the user "sonia" to connect to the server from localhost using
                        the password "passwd". Login as root. Switch to the MySQL db. Give privs.
                        Update privs.</h6>
                        Answers :
                        
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql grant usage on *.* to sonia@localhost identified by 'passwd';<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6>
                        Q28.How to give user privilages for a db. Login as root. Switch to the MySQL db.
                        Grant privs. Update privs.</h6>
                        Answers :
                        
                        # mysql -u root -p<br/>
                        mysql use mysql;<br/>
                        mysql INSERT INTO user<br/>
                        (Host,Db,User,Select_priv,Insert_priv,Update_priv,Delete_priv,Create_priv,Drop_priv)<br/>
                        VALUES ('%','databasename','username','Y','Y','Y','Y','Y','N');<br/>
                        mysql flush privileges;<br/>
                        or<br/>
                        mysql grant all privileges on databasename.* to username@localhost;<br/>
                        mysql flush privileges;<br/>
                        <hr/>    <h6> Q29.How To update info already in a table and Delete a row(s) from a table.</h6>
                        Answer :
                        
                        mysql UPDATE [table name] SET Select_priv = 'Y',Insert_priv = 'Y',Update_priv =
                        'Y' where [field name] = 'user';<br/>
                        mysql DELETE from [table name] where [field name] = 'whatever';<br/>
                        <hr/>    <h6>Q30.How to Update database permissions/privilages.</h6>
                        Answer :
                         mysql flush privileges; <br/>
                       
                         <hr/>         <h6>Q31.How to Delete a column and Add a new column to database</h6>
                        Answer :
                        
                        mysql alter table [table name] drop column [column name];<br/>
                        mysql alter table [table name] add column [new column name] varchar (20);<br/>
                        <hr/>    <h6> Q32.Change column name and Make a unique column so we get no dupes.</h6>
                        Answer :
                        
                        mysql alter table [table name] change [old column name] [new column name]
                        varchar (50);<br/>
                        mysql alter table [table name] add unique ([column name]);<br/>
                        <hr/>    <h6> Q33.How to make a column bigger and Delete unique from table.</h6>
                        Answer :
                        
                        mysql alter table [table name] modify [column name] VARCHAR(3);
                        mysql alter table [table name] drop index [colmn name];<br/>
                        <hr/>    <h6> Q34.How to Load a CSV file into a table</h6>
                        Answer :
                        
                        mysql LOAD DATA INFILE '/tmp/filename.csv' replace INTO TABLE [table name]
                        FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' (field1,field2,field3);<br/>
                        <hr/>    <h6>
                        Q35.How to dump all databases for backup. Backup file is sql commands to
                        recreate all db's.</h6><br/>
                        Answer :
                        # [mysql dir]/bin/mysqldump -u root -ppassword --opt rightarrow/tmp/alldatabases.sql<br/>
                        <hr/>    <h6> Q36.How to dump one database for backup.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysqldump -u username -ppassword --databases databasename
                        rightarrow/tmp/databasename.sql<br/>
                        <hr/>    <h6>Q37.How to dump a table from a database.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysqldump -c -u username -ppassword databasename tablename
                        rightarrow /tmp/databasename.tablename.sql<br/>
                        <hr/>    <h6>Q38.QRestore database (or database table) from backup.</h6>
                        Answer :
                        
                        # [mysql dir]/bin/mysql -u username -ppassword databasename leftarrow
                        /tmp/databasename.sql<br/>
                        <hr/>    <h6> Q39.How to Create Table show Example</h6>
                        Answer :
                        
                        mysql CREATE TABLE [table name] (firstname VARCHAR(20), middleinitial<br/>
                        VARCHAR(3), lastname VARCHAR(35),suffix VARCHAR(3),officeid<br/>
                        VARCHAR(10),userid VARCHAR(15),username VARCHAR(8),email<br/>
                        VARCHAR(35),phone VARCHAR(25), groups VARCHAR(15),datestamp<br/>
                        DATE,timestamp time,pgpemail VARCHAR(255));<br/>
                        <hr/>    <h6>
                        Q40.SHow to search second maximum(second highest) salary value(integer)from
                        table employee (field salary)in the manner so that mysql gets less load?</h6>

                        Answers : By below query we will get second maximum(second highest) salary 
                         value(integer)from table employee (field salary)in the manner so that mysql gets less
                        load?<br/>
                        SELECT DISTINCT(salary) FROM employee order by salary desc limit 1 , 1 ;
                        (This way we will able to find out 3rd highest , 4th highest salary so on just need to
                        change limit condtion like LIMIT 2,1 for 3rd highest and LIMIT 3,1 for 4th
                        some one may finding this way useing below query that taken more time as compare
                        to above query SELECT salary FROM employee where salary leftarrow (select max(salary)
                        from employe) order by salary DESC limit 1 ;<br/><br/>
                    </p>
            </div>
           </div>
    </div>
    {/*====================================================================================================*/}
              <footer>
                <div class="row footer">
                    <h6>Last Updated: Tuesday, January 12, 2021<br />
                      Centre for Development of Advanced Computing (C-DAC Mumbai)</h6>
                </div>
              </footer>
    </div>
        );
      }
    {/**====================================================================================================*/}
  

    export default Database;