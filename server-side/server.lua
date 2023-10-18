-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
local API = {}
local actived = {}
Tunnel.bindInterface(GetCurrentResourceName(),API)
------------------------------------------------------------
--- [ CACHE ]
------------------------------------------------------------
local cache = {}
function Init()
    Prepare("armory/load_data","SELECT * FROM arsenal")
    Prepare("armory/set_data","UPDATE arsenal SET bank = @bank WHERE name = @name")
    Prepare("armory/add_data","INSERT INTO arsenal (name,bank) VALUES (@name,@bank)")
    Prepare("armory/delete_data","DELETE FROM arsenal WHERE name = @name")

	local data = Query("armory/load_data")
	-- Export db data
	for k,v in pairs(data) do
		cache[v.name] = v.bank
	end
	-- Insert new arsenal to db
	for k,v in pairs(armory) do
		if not cache[k] then
			Query("armory/add_data",{ name = k, bank = v.initBank })
			cache[k] = v.initBank
		end
	end
	-- Remove not in config
	for k,v in pairs(cache) do
		if not armory[k] then
			Query("armory/delete_data",{ name = k })
			cache[k] = nil
		end
	end
	print('[ARSENAL]: CACHE LOADED')
end

local AddBank = function(index, value)
	if not cache[index] then return end
	cache[index] = cache[index] + value
	Query("armory/set_data",{ name = index, bank = cache[index]})
	return true
end

local RemoveBank = function(index, value)
	if not cache[index] then return end
	cache[index] = cache[index] - value
	Query("armory/set_data",{ name = index, bank = cache[index]})
	return true
end

local IsAvaliableBank = function(index,value)
	if not cache[index] then return end
	return (cache[index] - value >= 0)
end

local GetBank = function(index)
	if not cache[index] then return end
	return cache[index]
end

CreateThread(Init)
------------------------------------------------------------
--- [ Tunnel ]
------------------------------------------------------------
function API.HasPermission(index)
	local source = source
	local Passport = GetUserId(source)
	if not Passport then return end
    local perm = armory[index]["permission"]
    if perm == "" then return true end
	return HasPermission(Passport, perm)
end

function API.getArsenalBank(index)
	local source = source
	return GetBank(index) or 0
end

function API.tryWeapon(armoryIndex, itemIndex)
	local source = source
	local Passport = GetUserId(source)
	if armory[armoryIndex] and weapons[itemIndex] then
		local weapon = weapons[itemIndex]
        local config = armory[armoryIndex]
        if armory[armoryIndex]['armoryType'] ~='armory' and not actived[Passport] then
            if  (vRP.InventoryWeight(Passport) + ItemWeight(weapon.item)) <= InventoryMaxWeight(Passport) then
                if Payment(Passport,weapon.price) then
                    actived[Passport] = true
	    		    GiveWeapon(source,Passport,weapon.item)
                    actived[Passport] = nil
                    Notify(source,'sucess',"Você retirou 1x"..ItemName(weapon.item))
			        return cache[armoryIndex]
                else
                    Notify(source,'negado','Você não tem dinheiro para comprar este equipamento')
                end
            else
                Notify(source,'negado','Você não tem espaço em sua mochila para este item')
            end
        else
            if cache[armoryIndex] - weapon.price >= 0 and not actived[Passport] then
                actived[Passport] = true
                GiveWeapon(source,Passport,weapon.item)
                RemoveBank(armoryIndex, weapon.price)
                actived[Passport] = nil
                Notify(source,'sucess',"Você retirou 1x"..ItemName(weapon.item))
                return cache[armoryIndex]
            else
                Notify(source,'negado','Você não tem dinheiro para comprar este equipamento')
            end
        end
	end	
end