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
            DrawMarker(27,armory[armoryIndex]['cds'].x,armory[armoryIndex]['cds'].y,armory[armoryIndex]['cds'].z-1,0,0,0,0.0,0,0,0.6,0.6,0.5,234, 68, 167,50,0,0,0,1)
            DrawText3Ds(armory[armoryIndex]['cds'].x,armory[armoryIndex]['cds'].y,armory[armoryIndex]['cds'].z,"PRESSIONA ~q~[E]~w~ PARA ABRIR")
            if dist <= 2 and IsControlJustPressed(0,38) and vSERVER.HasPermission(armoryIndex) then
                SendReactMessage('SET_TITLE',armory[armoryIndex]['name'])
                SendReactMessage('SET_CATEGORYS', GetArmoryTypes(armoryIndex))
                SendReactMessage('SET_WEAPON_LIST', GerateFistList(armoryIndex))
                SendReactMessage('SET_IP',images_ip)
                
                if armory[armoryIndex]['armoryType'] == 'armory' then
                    SendReactMessage('SET_BANK', vSERVER.getArsenalBank(armoryIndex))
                    SendReactMessage('TOOGLE_BANK',armory[armoryIndex]['armoryType'] == 'armory')
                end
                toggleNuiFrame(true)
            elseif dist >= 5 then
                armoryIndex = nil
            end
        end
        Wait(idle)
	end 
end)

RegisterNUICallback('take:weapon',function(data,cb)
    local index = data.index
    toggleNuiFrame(false)
    vSERVER.tryWeapon(armoryIndex,index)
	cb(armory[armoryIndex]['armoryType'] == 'armory' and vSERVER.getArsenalBank(armoryIndex))
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

function DrawText3Ds(x,y,z,text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    SetTextScale(0.34, 0.34)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(text)
    DrawText(_x,_y)
    local factor = (string.len(text)) / 370 +0.02
    DrawRect(_x,_y+0.0125, 0.001+ factor, 0.028, 0, 0, 0, 78)
end
