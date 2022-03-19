using System;
using MySql.Data.MySqlClient;

namespace gamemode.Database;

public class Connection
{
    
    private static MySqlConnection MySqlConn;
    public static void ConnectionDb()
    {
        try
        {
            MySqlConn = new MySqlConnection(Config.getDbStringConnection());
            MySqlConn.Open();
            Console.WriteLine("<--- Connection BDD --->");
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }
}