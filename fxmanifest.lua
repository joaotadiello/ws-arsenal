fx_version "bodacious"
game "gta5"
lua54 "yes"

ui_page 'web-side/build/index.html'

client_scripts {
	"@vrp/config/Native.lua",
	"@vrp/config/Item.lua",
	"@vrp/lib/Utils.lua",
    "language.lua",
	"config.lua",
	"client-side/*"
}

server_scripts {
	"@vrp/config/Item.lua",
	"@vrp/lib/Utils.lua",
	"config.lua",
	"server-side/*"
}

files {
	'web-side/build/index.html',
	'web-side/build/**/*',
}