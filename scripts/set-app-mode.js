const fs = require('fs');

const mode = process.argv[2];

const modes = {
	app: 0,
	storybook: 1,
	web: 2,
};

modes[mode] === 2
	? fs.writeFileSync('env.json', '{"LOAD_STORYBOOK": true, "WEB_MODE": true}')
	: fs.writeFileSync('env.json', `{"LOAD_STORYBOOK": ${!!modes[mode]}, "WEB_MODE": false}`);
