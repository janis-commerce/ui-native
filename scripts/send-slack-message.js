'use strict';

const pkg = require('../package.json');

const fs = require('fs');
const path = require('path');
const util = require('util');
('util');
const https = require('https');

const url = process.env.RELEASE_SLACK_WEBHOOK_URL;
const serviceCode = pkg.name;
const releaseVersion = process.env.GITHUB_REF_NAME;
const repoBaseDir = '.';

const releaseNotes = fs
	.readFileSync(path.resolve(repoBaseDir, './RELEASE_NOTES.md'), 'utf8')
	.replace(/### ([a-z]+)/gi, '*$1*')
	.replace(/\*{2}/g, '*');

const header = `${serviceCode} ${releaseVersion} released! :tada:`;

(async () => {
	const asyncRequest = util.promisify((requestData, cb) => {
		const {url: requestUrl, body, ...rest} = requestData;

		const req = https.request(requestUrl, rest, (res) => {
			if (res.statusCode !== 200) {
				throw new Error(`Failed to send request to ${requestUrl}: ${res.statusCode}`);
			}

			res.on('end', cb);
		});

		req.on('error', cb);

		req.write(JSON.stringify(body));

		req.end();
	});

	try {
		await asyncRequest({
			method: 'post',
			url,
			headers: {
				'content-type': 'application/json',
			},
			body: {
				blocks: [
					{
						type: 'header',
						text: {
							type: 'plain_text',
							text: header,
							emoji: true,
						},
					},
					{
						type: 'divider',
					},
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `${releaseNotes}`,
						},
					},
				],
			},
		});
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error(e.stack);
	}
})();
