local langs = {
    pt_BR = {
        takeWeapon = 'Retirar',
        price = 'Preço',
        ammoText = 'Munições',
        damage = 'Dano',
        fireRate = 'Cadência de tiro',
        accuracy = 'Precisão',
        range = 'Alcance',
        weaponType = 'Tipo de Arma',
    },
    en_US = {
        takeWeapon = 'Take',
        price = 'Price',
        ammoText = 'Ammo',
        damage = 'Damage',
        fireRate = 'Fire Rate',
        accuracy = 'Accuracy',
        range = 'Range',
        weaponType = 'Weapon type',
    }
}

language = "pt_BR" -- change language here

lang = langs[language] or langs.en_US