module.exports = {
    name: 'upgrade_weapon',
    description: 'Upgrades a Weapon',
    usage: 'PREFIX + UPGRADE',
    args: true,
    dmAllow: true,
    channels: [],
	execute(message, userData, msg_arr) {
        const sender = message.author;
        const weaponConstants = require('../constants/weapon.json');

        // Declarations
        var material;
        var materials;
        var materialCount;
        var newExp;
        var levelUpExpMultiplier = 50;
        var msg = '';

        try {
            if (msg_arr.length === 6 && weaponConstants[msg_arr[1]] !== undefined && weaponConstants[msg_arr[4]] !== undefined) {

                // CHECK IF UNDEFINED TO PREVENT CRASH
                if (!userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text])
                    return userData;
                if (!userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text][msg_arr[1]])
                    return userData;
                var weapon = userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text][msg_arr[1]][msg_arr[2]];

                // WHEN UPGRADING USING A SINGLE MATERIAL
                if (msg_arr[3].toUpperCase() === 'SINGLE'){
                    if (msg_arr[1] === msg_arr[4] && msg_arr[2] === msg_arr[5]){
                        message.channel.send(`<@${sender.id}> You can't use the current weapon as material.`);
                        return userData;
                    }
                    materials = userData.inventory.weapons[weaponConstants[msg_arr[4]].rarity_text][msg_arr[4]];
                    material = materials[msg_arr[5]];
                    if (weapon && material) {
                        var oldLevel = weapon.level;
                        var newExp = weapon.stored_exp + material.stored_exp + (material.level * 50 / 2 * (material.level - 1)) + weaponConstants[msg_arr[4]].materialExp;
                        weapon.stored_exp = newExp;
                        while (newExp >= weapon.level * levelUpExpMultiplier) {
                            newExp -= weapon.level * levelUpExpMultiplier;
                            weapon.stored_exp = newExp;
                            weapon.level++;
                        }
                        if (weapon.level !== oldLevel)
                            msg += `\nNew weapon level: ${oldLevel} -> ${weapon.level}`;
                        msg += `\nNew weapon exp: ${weapon.stored_exp}/${weapon.level * levelUpExpMultiplier}`;
                        materials.splice(msg_arr[5], 1);
                        message.channel.send(`<@${sender.id}> You have successfully enhanced ${msg_arr[1]} using ${msg_arr[4]}!${msg}`);
                    }
                }

                // WHEN UPGRADING USING MULTIPLE MATERIALS
                else if (msg_arr[3].toUpperCase() === 'MULTI') {
                    materials = userData.inventory.weapons[weaponConstants[msg_arr[4]].rarity_text][msg_arr[4]];
                    materialCount = msg_arr[5];
                    var currentMaterial;
                    var successCounter;
                    if (weapon) {
                        var oldLevel = weapon.level;
                        var newExp = weapon.stored_exp;
                        for (var ctr = 0; ctr < materialCount; ctr++) {
                            currentMaterial = materials.findIndex((material) => material.rank + material.level === 2 && material !== weapon);
                            if (currentMaterial >= 0) {
                                newExp += weaponConstants[msg_arr[4]].materialExp;
                                successCounter++;
                                materials.splice(currentMaterial,1);
                            }
                            else
                                break;
                        }
                        while (newExp >= weapon.level * levelUpExpMultiplier) {
                            newExp -= weapon.level * levelUpExpMultiplier;
                            weapon.level++;
                        }
                        if (newExp === weapon.stored_exp && oldLevel === weapon.level) {
                            message.channel.send(`<@${sender.id}> You have zero ${msg_arr[4]}. Use another material.`);
                            return userData;
                        }
                        weapon.stored_exp = newExp;
                        if (weapon.level !== oldLevel)
                        msg += `\nNew weapon level: ${oldLevel} -> ${weapon.level}`;
                            msg += `\nNew weapon exp: ${weapon.stored_exp}/${weapon.level * levelUpExpMultiplier}`;
                        message.channel.send(`<@${sender.id}> You have successfully enhanced ${msg_arr[1]} using ${msg_arr[4]}!${msg}`);
                    }
                    else {
                        message.channel.send(`<@${sender.id}> Weapon doesn't exist`);
                    }
                }
                else {
                    message.channel.send(`<@${sender.id}> Incorrect Arguments`);
                }
                return userData;
            }
            else if (msg_arr.length === 3 && weaponConstants[msg_arr[1]] !== undefined && weaponConstants[msg_arr[2]] !== undefined) {
                // CHECK IF UNDEFINED TO PREVENT CRASH
                if (!userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text])
                    return userData;
                if (!userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text][msg_arr[1]])
                    return userData;


                var weapons = userData.inventory.weapons[weaponConstants[msg_arr[1]].rarity_text][msg_arr[1]];
                var weaponLevelExp = Math.max.apply(Math, weapons.map((weapon) => (weapon.level * 50 / 2 * (weapon.level - 1)) + weapon.stored_exp                   
                ));
                var weaponIndex = weapons.findIndex((weapon) => (weapon.level * 50 / 2 * (weapon.level - 1)) + weapon.stored_exp === weaponLevelExp);
                var weapon = weapons[weaponIndex];

                materials = userData.inventory.weapons[weaponConstants[msg_arr[2]].rarity_text][msg_arr[2]];
                materialCount = 999;
                var currentMaterial;
                var successCounter;
                if (weapon) {
                    var oldLevel = weapon.level;
                    var newExp = weapon.stored_exp;
                    for (var ctr = 0; ctr < materialCount; ctr++) {
                        currentMaterial = materials.findIndex((material) => material.rank + material.level === 2 && material !== weapon);
                        if (currentMaterial >= 0) {
                            newExp += weaponConstants[msg_arr[2]].materialExp;
                            successCounter++;
                            materials.splice(currentMaterial,1);
                        }
                        else
                            break;
                    }
                    while (newExp >= weapon.level * levelUpExpMultiplier) {
                        newExp -= weapon.level * levelUpExpMultiplier;
                        weapon.level++;
                    }
                    if (newExp === weapon.stored_exp && oldLevel === weapon.level) {
                        message.channel.send(`<@${sender.id}> You have zero ${msg_arr[4]}. Use another material.`);
                        return userData;
                    }
                    weapon.stored_exp = newExp;
                    if (weapon.level !== oldLevel)
                    msg += `\nNew weapon level: ${oldLevel} -> ${weapon.level}`;
                        msg += `\nNew weapon exp: ${weapon.stored_exp}/${weapon.level * levelUpExpMultiplier}`;
                    message.channel.send(`<@${sender.id}> You have successfully enhanced ${msg_arr[1]} using ${msg_arr[2]}!${msg}`);
                    return userData;
                }
                else {
                    message.channel.send(`<@${sender.id}> Weapon doesn't exist`);
                }
            }
            else {
                message.channel.send(`<@${sender.id}> incorrect syntax or weapon doesn't exist`);
                return userData;
            }

            // ADD NEW COMMAND FOR !weapons <weapon_name> TO DISPLAY UPGRADED WEAPON CONDITION

        } catch (err) { console.log(message.content, message.author.id, err) }
	},
}