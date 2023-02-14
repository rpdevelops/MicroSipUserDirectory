# MicroSIP User Directory
This is a simple API using NodeJS to get phone numbers of your company in a get Request that can be added in field Directory of Users in MicroSIP Config.

To use this API you just need:
- A database Running. (In this case I've used a Mysql Database, but you can change the node_module to anothers)
- A datatable with your phone numbers and your informations( names, roles, infos, etc)
- Adjust the ".env" file with information of your Database Connection
- Run the in a Server and do Get Requests to test it with http://hostname:3000/phonebook.

Here is the Table Structure that you need:

CREATE TABLE `phonebook` (
  `number` int NOT NULL,
  `name` varchar(60) NOT NULL,
  `comment` varchar(100) NOT NULL,
  `info` varchar(100) NOT NULL,
  `role` varchar(60) NOT NULL
)