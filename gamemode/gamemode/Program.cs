using System;
using AltV.Net;
using gamemode.Database;

namespace gamemode
{
    internal class MyResource : Resource
    {
        public override void OnStart()
        {
            Console.WriteLine("<--- Démarer côter serveur --->");
            Connection.ConnectionDb();
        }
        
        public override void OnStop()
        {
            Console.WriteLine("Stopped");
        }
    }
}
