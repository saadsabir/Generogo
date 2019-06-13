<?php
class Database {
    public static $server       = 'localhost';
    public static $username      = 'root';
    public static $password      = 'root';
    public static $databaseName  = 'GENEROGO';
    //function to connect to the database
    public static function getDatabaseConnexion() {
        return new pdo('mysql:host=' . static::$server . ';dbname=' . static::$databaseName, static::$username, static::$password);
    }
}
?>
