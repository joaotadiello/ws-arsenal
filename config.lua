weapons = {
    ["glock"] = {
        ['item'] = "WEAPON_PISTOL_MK2",
        ['name'] = "GLOCK",
        ['image'] = 'amt380',
        ["price"] = 2000,
        ["stats"] = {
            ['damage'] = 3,
            ['fireRate'] = 4,
            ['accuracy'] = 5,
            ['range'] = 3,
            ['ammo'] = 200
        },
        ['type'] = 'Pistola'
    },
    ["ak"] = {
        ['item'] = "WEAPON_ASSAULTRIFLE_MK2",
        ['name'] = "AK-47",
        ['image'] = 'ak74',
        ["price"] = 1000,
        ["stats"] = {
            ['damage'] = 3,
            ['fireRate'] = 4,
            ['accuracy'] = 5,
            ['range'] = 3,
            ['ammo'] = 200
        },
        ['type'] = 'Rifle'
    },
}

armory = {
    ['Policia'] = {
        ["name"] = "Policia",
        ['weapons'] = {'glock','ak'},
        ['types'] = {},
        ['permission'] = "",
		['cds'] = vec3(-1321.13,-1514.1,4.43),
        ['initBank'] = 10000,
        ['armoryType'] = 'ammonation', --ammonation
        ['webhook'] = ''
    },
    ['Mecanico'] = {
        ["name"] = "Policia",
        ['weapons'] = {'glock','ak'},
        ['types'] = {},
        ['permission'] = "",
		['cds'] = vec3(-1421.13,-1514.1,4.43),
        ['initBank'] = 10000,
        ['armoryType'] = 'ammonation',
        ['webhook'] = ''

    },
}

images_ip = 'http://localhost/img/'