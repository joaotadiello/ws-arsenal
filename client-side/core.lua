-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
vSERVER = Tunnel.getInterface(GetCurrentResourceName())
cfg = module(GetCurrentResourceName(), "config")

-- local teste = {
-- 	{ name: "Assault Rifle AKM1",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM2",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:2,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM3",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:1,accuracy:4,range:4}},
-- 	{ name: "Assault Rifle AKM4",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:2,rateOfFire:3,accuracy:1,range:3}},
-- 	{ name: "Assault Rifle AKM5",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:5,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM6",image:"",price:10000, stats:{ammo:100,type:'Assault',damage:3,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM7",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:5,rateOfFire:3,accuracy:1,range:5}},
-- 	{ name: "Assault Rifle AKM8",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:1,rateOfFire:5,accuracy:1,range:3}},
-- 	{ name: "Assault Rifle AKM9",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:5,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM10",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:1,rateOfFire:3,accuracy:4,range:3}},
-- 	{ name: "Assault Rifle AKM11",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:3,rateOfFire:5,accuracy:3,range:3}},
-- 	{ name: "Assault Rifle AKM12",image:"",price:10000, stats:{ammo:100,type:'Assault Rifle',damage:3,rateOfFire:3,accuracy:4,range:3}},
-- }

local corp = false
CreateThread(function()
	while true do 
		local ms = 1000
		for k, v in pairs(cfg.orgs) do 
			local pedCds = GetEntityCoords(PlayerPedId())
			local x,y,z = table.unpack(v['coords'])
			local distance = Vdist(pedCds, x, y, z )
			if distance <= 10.0 then 
				ms = 1
				if distance <= 2.0 and IsControlJustPressed(0,38) then 
					if vSERVER.HasPermission(v['adminP']) then 
						corp = k
						local bank = vSERVER.getArsenal(corp)
						SendReactMessage('SET_WEAPON_LIST', cfg.weapons)
						SendReactMessage('SET_CATEGORYS', v["classWeapons"])
						SendReactMessage('SET_TITLE',k)
                        SendReactMessage('SET_LANGUAGE',lang)
                        SendReactMessage('SET_BANK',bank)
						toggleNuiFrame(true)
					elseif vSERVER.HasPermission(v['useP']) then 
						corp = k
						--local bank = vSERVER.getArsenal(corp)
					end
				end 
			end 
			

		end 
		Wait(ms)
	end 
end)

RegisterNUICallback('take:weapon',function(data,cb)
	print(json.encode(data))
	cb(true)
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