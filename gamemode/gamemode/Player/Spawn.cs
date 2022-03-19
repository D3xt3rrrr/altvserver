using System;
using AltV.Net;
using AltV.Net.Data;
using AltV.Net.Elements.Entities;
using AltV.Net.Enums;

namespace gamemode.Player;


public class Player : IScript
{
    [ScriptEvent(ScriptEventType.PlayerConnect)]
    public static void PlayerConnect(IPlayer player, string reason)
    {
        player.Model = (uint) PedModel.Fabien;
        player.Spawn(Config.getFirstPosition(),1000);
    }

    [ClientEvent("gamemode:login")]
    public void connectPlayer(IPlayer player, string user, string pass)
    {
        Database.PlayerDatabase.createPlayer(player, user, pass);
    }
}
