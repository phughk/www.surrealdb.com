-- Specify the namespace and database for the user
USE NS abcum DB app_vitalsense;
-- Create the user
DEFINE USER username ON DATABASE PASSWORD '123456' ROLES OWNER;
