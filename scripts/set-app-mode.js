const fs = require('fs');

const mode = process.argv[2];

const modes = {
	app: 0,
	storybook: 1,
};

fs.writeFileSync('.env', `LOAD_STORYBOOK=${!!modes[mode]}`);