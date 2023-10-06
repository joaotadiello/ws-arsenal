-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
cRP = {}
Tunnel.bindInterface(GetCurrentResourceName(),cRP)
cfg = module(GetCurrentResourceName(), "config")

function cRP.HasPermission(perm)
	local source = source
	local Passport = vRP.Passport(source)
	if Passport and vRP.HasPermission(Passport, perm) then 
		return true
	end
	return false
end

function cRP.getArsenal(corp)
	local source = source
	local Consult = vRP.Query("entitydata/GetData",{ dkey = "Arsenal:"..corp }) or 0
	if Consult then 
		Consult = Consult[1]["dvalue"]
	end
	
	return Consult or 0
end

function setArsenal(corp, data)
	local source = source
	vRP.Query("entitydata/SetData",{ dkey = "Arsenal:"..corp, dvalue = parseInt(data) })
end

function cRP.buyItem(name,amount, price, corp)
	local source = source
	local Passport = vRP.Passport(source)
	if Passport then 
		local bank = cRP.getArsenal(corp)
		if parseInt(bank) >= price then
			if  (vRP.InventoryWeight(Passport) + itemWeight(name) * amount) <= vRP.GetWeight(Passport) then 
				setArsenal(corp, bank-price)
				vRP.GenerateItem(Passport, name, amount, true)
				TriggerEvent("Discord","Police","**Source:** "..source.."\n**Passaporte:** "..Passport.."\n **Retirou:** "..price.." \n **Do arsenal da:** "..corp.."\n**Address:** "..GetPlayerEndpoint(source),3092790)
			else 
				TriggerClientEvent("Notify",source,"vermelho","<b>Espaço</b> insuficiente.",5000)
			end
		else 
			TriggerClientEvent("Notify",source,"vermelho","<b>Verba</b> insuficientes.",5000)
		end
	end 
	return cRP.getArsenal(corp)
end

function cRP.addBank(value, corp)
	local source = source
	local Passport = vRP.Passport(source)
	if Passport then 
		local bank = parseInt(cRP.getArsenal(corp))
		setArsenal(corp, bank+parseInt(value))
	end 
	TriggerEvent("Discord","Police","**Source:** "..source.."\n**Passaporte:** "..Passport.."\n **Adicionou:** "..value.." \n **No arsenal da:** "..corp.."\n**Address:** "..GetPlayerEndpoint(source),3092790)
	return cRP.getArsenal(corp)
end
