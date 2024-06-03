import fs from 'node:fs'
import path from 'node:path'
import { Command, Option } from 'commander'
import { $ } from 'execa'
import Logger from './logger.js'
import {
	DESKTOP_MAIN_CATEGORIES,
	DESKTOP_ADDITIONAL_CATEGORIES,
	DESKTOP_FILE_PATH
} from './constants.js'

const program = new Command()

program
	.name('shortcut-creator')
	.description('CLI to create desktop shortcuts in Ubuntu')
	.version('1.0.0')

program
	.command('create', { isDefault: true })
	.description('Create a new shortcut')
	.argument('<path>', 'path to the executable')
	.option('-n, --name <name>', 'name of the shortcut')
	.option('-t, --terminal', 'run the executable in a terminal', false)
	.option(
		'-s, --startup-notify',
		'show a notification when the shortcut is launched',
		false
	)
	.requiredOption('-i, --icon <icon>', 'path to the icon file')
	.option('-co, --comment <comment>', 'comment for the shortcut')
	.addOption(
		new Option('-c, --categories <categories...>', 'category of the shortcut')
			.choices([...DESKTOP_MAIN_CATEGORIES, ...DESKTOP_ADDITIONAL_CATEGORIES])
			.default(['Utility'])
	)
	.action(async (pathString, options) => {
		const pathExists = fs.existsSync(pathString)
		if (!pathExists) {
			Logger.error(`The path '${pathString}' does not exist`)
			process.exit(1)
		}

		const iconPath = options.icon
		if (iconPath) {
			const iconExists = fs.existsSync(iconPath)
			if (!iconExists) {
				Logger.error(`The icon path '${iconPath}' does not exist`)
				process.exit(1)
			}
			if (!iconPath.endsWith('.png')) {
				Logger.error('Icon file must be a .png file')
				process.exit(1)
			}
		}

		try {
			const { stderr } = await $`chmod u+x ${pathString}`
			if (stderr) throw new Error(stderr)
		} catch (error) {
			Logger.error(`Failed to make '${pathString}' executable`)
			process.exit(1)
		}

		const fileName = path
			.basename(pathString)
			.trim()
			.split(' ')
			.join('-')
			.match(/[^.]+/)[0]

		const execAbsolutePath = path.resolve(pathString)

		const desktopFile = `[Desktop Entry]
Name=${options.name}
Exec=${execAbsolutePath} %u${iconPath ? `\nIcon=${iconPath}` : ''}
Comment=${options.comment}
Type=Application
StartupNotify=${options.startupNotify}
Categories=${options.categories.join(';')}
Terminal=${options.terminal}`

		const desktopFilePath = `${process.env.HOME}${DESKTOP_FILE_PATH}/${fileName}.desktop`
		if (fs.existsSync(desktopFilePath)) {
			Logger.warn(`Shortcut already exists at '${desktopFilePath}'`)
			process.exit(1)
		}

		try {
			fs.writeFileSync(desktopFilePath, desktopFile)
			Logger.success(`Shortcut created at '${desktopFilePath}'`)
		} catch (error) {
			Logger.error(`Failed to create shortcut: ${error.message}`)
			process.exit(1)
		}

		try {
			const validation = await $`desktop-file-validate ${desktopFilePath}`
			if (validation.stderr) throw new Error(validation.stderr)
		} catch (error) {
			Logger.error('Failed to validate the desktop database')
			process.exit(1)
		}
	})

program.parse()

// https://wiki.archlinux.org/title/desktop_entries
