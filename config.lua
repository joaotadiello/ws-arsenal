gs = {}

gs.weapons = {
	{
		name = itemName("WEAPON_COMBATPISTOL"),
		image = '',
		price = 200,
		stats = {
			ammo = 200,
			type = 'Pistol',
			damage = 3,
			rateOfFire = 2,
			accuracy = 3,
			range = 5
		}
	},
	{
		name = itemName("WEAPON_ASSAULTSMG"),
		image = '',
		price = 100,
		stats = {
			ammo = 200,
			type = 'SMG',
			damage = 3,
			rateOfFire = 2,
			accuracy = 3,
			range = 5
		}
	},
	{
		name = itemName("WEAPON_ASSAULTSMG"),
		image = '',
		price = 100,
		stats = {
			ammo = 200,
			type = 'SMG',
			damage = 3,
			rateOfFire = 2,
			accuracy = 3,
			range = 5
		}
	}
}

gs.orgs = {
    ['Police'] = { 
		['coords'] = { 452.42,-980.22,30.68,},
		['adminP'] = "Admin",
		['useP'] = "Police",
		['weapons'] = {'glock'},
		['classWeapons'] = {"Pistols","Rifles","Shotguns"},
		['data'] = { 
			
			{ name= "Assault Rifle AKM1",image="",price=10000, stats={ammo=100,type='Assault',damage=5,rateOfFire=5,accuracy=5,range=5}},
			{ name= "Assault Rifle AKM2",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=2,rateOfFire=3,accuracy=4,range=3}},
			{ name= "Assault Rifle AKM3",image="",price=10000, stats={ammo=100,type='Assault',damage=5,rateOfFire=1,accuracy=4,range=4}},
			{ name= "Assault Rifle AKM4",image="",price=10000, stats={ammo=100,type='Assault',damage=2,rateOfFire=3,accuracy=1,range=3}},
			{ name= "Assault Rifle AKM5",image="",price=10000, stats={ammo=100,type='Assault',damage=5,rateOfFire=3,accuracy=4,range=3}},
			{ name= "Assault Rifle AKM6",image="",price=10000, stats={ammo=100,type='Assault',damage=3,rateOfFire=3,accuracy=4,range=3}},
			{ name= "Assault Rifle AKM7",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=5,rateOfFire=3,accuracy=1,range=5}},
			{ name= "Assault Rifle AKM8",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=1,rateOfFire=5,accuracy=1,range=3}},
			{ name= "Assault Rifle AKM9",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=5,rateOfFire=3,accuracy=4,range=3}},
			{ name= "Assault Rifle AKM10",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=1,rateOfFire=3,accuracy=4,range=3}},
			{ name= "Assault Rifle AKM11",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=3,rateOfFire=5,accuracy=3,range=3}},
			{ name= "Assault Rifle AKM12",image="",price=10000, stats={ammo=100,type='Assault Rifle',damage=3,rateOfFire=3,accuracy=4,range=3}},
	    },
		-- ['items'] = {
		-- 	['vest2'] = {itemName("vest2"),itemIndex("vest2"), 750},
		-- 	['WEAPON_COMBATPISTOL'] = {itemName("WEAPON_COMBATPISTOL"),itemIndex("WEAPON_COMBATPISTOL"), 800},
		-- 	['WEAPON_PISTOL_AMMO'] = {itemName("WEAPON_PISTOL_AMMO"),itemIndex("WEAPON_PISTOL_AMMO"), 8},
		-- 	['WEAPON_PUMPSHOTGUN_MK2'] = {itemName("WEAPON_PUMPSHOTGUN_MK2"),itemIndex("WEAPON_PUMPSHOTGUN_MK2"), 1600},
		-- 	['WEAPON_SHOTGUN_AMMO'] = {itemName("WEAPON_SHOTGUN_AMMO"),itemIndex("WEAPON_SHOTGUN_AMMO"), 16},
		-- 	['WEAPON_ASSAULTSMG'] = {itemName("WEAPON_ASSAULTSMG"),itemIndex("WEAPON_ASSAULTSMG"), 2200},
		-- 	['WEAPON_SMG_AMMO'] = {itemName("WEAPON_SMG_AMMO"),itemIndex("WEAPON_SMG_AMMO"), 22},
		-- 	['WEAPON_CARBINERIFLE'] = {itemName("WEAPON_CARBINERIFLE"),itemIndex("WEAPON_CARBINERIFLE"), 3200},
		-- 	['WEAPON_RIFLE_AMMO'] = {itemName("WEAPON_RIFLE_AMMO"),itemIndex("WEAPON_RIFLE_AMMO"), 32},		
		-- 	['WEAPON_FLASHLIGHT'] = {itemName("WEAPON_FLASHLIGHT"),itemIndex("WEAPON_FLASHLIGHT"), 80},
		-- 	['radio'] = {itemName("radio"),itemIndex("radio"), 220},
		-- 	['handcuff'] = {itemName("handcuff"),itemIndex("handcuff"), 400}
		-- }
	},
}


return gs