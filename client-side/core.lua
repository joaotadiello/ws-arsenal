-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vSERVER = Tunnel.getInterface(GetCurrentResourceName())
local armoryIndex = nil

--- index == armory[index]
function WeaponsToClass(index)
    local data = armory[index]
    for k,v in pairs(data.weapons) do
        weapons[v]['index'] = v
        if not data.types[weapons[v].type] then
            data.types[weapons[v].type] = {weapons[v]}
        else
            table.insert(data.types[weapons[v].type],weapons[v])
        end
    end
end


-- Return {['Pistola'] = {['glock'] = {...},['Rifle'] = {['ak'] = {...}}
function GetArmoryTypes(index)
    local types = {}
    for k,v in pairs(armory[index]['types']) do
        table.insert(types,k)
    end
    return types
end

local Init = function()
    for k,v in pairs(armory) do
        WeaponsToClass(k)
    end
end


CreateThread(Init)

function GetDistance()
    local playerCoords = GetEntityCoords(PlayerPedId())
    for k,v in pairs(armory) do
        local dist = #(armory[k]['cds'] - playerCoords)
        if dist <= 5 then
            armoryIndex = k
        end
    end
end

function GerateFistList(index)
    local list = {}
    for k,v in pairs(armory[index]['types']) do
        list = v
        break
    end
    return list
end

CreateThread(function()
	while true do
        local idle = 500
        if not armoryIndex then
            GetDistance()
        else
            idle = 1
            local dist = #(armory[armoryIndex]['cds'] - GetEntityCoords(PlayerPedId()))
            if dist <= 2 and IsControlJustPressed(0,38) then
                toggleNuiFrame(true)
                SendReactMessage('SET_TITLE',armory[armoryIndex]['name'])
                SendReactMessage('SET_CATEGORYS', GetArmoryTypes(armoryIndex))
                SendReactMessage('SET_WEAPON_LIST', GerateFistList(armoryIndex))
                SendReactMessage('SET_IP',images_ip)
                
                if armory[armoryIndex]['armoryType'] == 'armory' then
                    SendReactMessage('SET_BANK', vSERVER.getArsenalBank(armoryIndex))
                    SendReactMessage('TOOGLE_BANK',armory[armoryIndex]['armoryType'] == 'armory')
                end
            elseif dist >= 5 then
                armoryIndex = nil
            end
        end
        Wait(idle)
	end 
end)

RegisterNUICallback('take:weapon',function(data,cb)
    local index = data.index
    local bank = vSERVER.tryWeapon(armoryIndex,index)
	cb(vSERVER.tryWeapon(armoryIndex,index) or vSERVER.getArsenalBank(armoryIndex))
    toggleNuiFrame(false)
end)


-----------------------------------------------------------------------------------------------------------------------------------------
-- CLOSE
-----------------------------------------------------------------------------------------------------------------------------------------
function SendReactMessage(action, data)
    SendNUIMessage({ action = action, data = data })
end
  
toggleNuiFrame = function (shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    SendReactMessage('setVisible', shouldShow)
    if shouldShow then
        StartScreenEffect("MenuMGSelectionIn", 0, true)
    else
        StopScreenEffect("MenuMGSelectionIn")
    end
end

RegisterNUICallback("hideFrame",function(data,cb)
    toggleNuiFrame(false)
    cb({})
end)

RegisterNUICallback('armory:selectedCategory',function(category,cb)
    if not category then return end
    cb(armory[armoryIndex]['types'][category])
end)