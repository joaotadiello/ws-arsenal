-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")

function Prepare(Name,Query)
    vRP.Prepare(Name,Query)
end

function Query(Name,Table)
    return vRP.Query(Name,Table)
end 

function GetUserId(Source)
    return vRP.Passport(source)
end

function HasPermission(Passport,Perm)
    return vRP.HasPermission(Passport, Perm)
end

function GiveWeapon(Source,Passport,Weapon)
	print(json.encode(Weapon))
    vRP.GenerateItem(Passport,Weapon,1,true)
end

function Notify(source,type,text)
    local types = {
        ['sucesso'] = 'sucesso', --verde
        ['negado'] = 'negado', --vermelho
        ['aviso'] = 'aviso' --amarelo
    }
    TriggerClientEvent('Notify',source,types[type],text)
end

function ItemName(item)
    return ItemName(item)
end

function ItemWeight(item)
    return ItemWeight(item)
end

function InventoryWeight(Passport)
    return vRP.InventoryWeight(Passport)
end

function InventoryMaxWeight(Passport)
    return vRP.GetWeight(Passport)
end

function Payment(Passport,Amount)
    return vRP.PaymentFullNormal(Passport,Amount)
end

function Webhook(link,message)
    SendWebhookMessage(link,message)
end