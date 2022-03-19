using System;
using AltV.Net.Elements.Entities;

namespace gamemode.Database;

public class PlayerDatabase
{
    public static void createPlayer(IPlayer player, string name, string pass) 
    {
        string query = "INSERT INTO "
        Console.WriteLine( + " " + name + " " + pass);
    }
}