import chalk from 'chalk'

const Logger = {
	log: (message) => console.log(chalk.white(message)),
	info: (message) => console.log(chalk.blue(message)),
	success: (message) => console.log(chalk.green(message)),
	warn: (message) => console.log(chalk.yellow(message)),
	error: (message) => console.log(chalk.red(message))
}

export default Logger
