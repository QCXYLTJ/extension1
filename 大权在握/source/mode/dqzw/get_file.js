import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
export let getFile;
if ('resolveLocalFileSystemURL' in window)
	getFile = (
		filename,
		callback = game.kongfunc,
	) => {
		return new Promise((resolve, reject) => {
			window.resolveLocalFileSystemURL(
				lib.assetURL,
				entry => {
					entry.getFile(
						filename,
						{},
						fileEntry => {
							fileEntry.file(
								fileToLoad => {
									callback(fileToLoad);
									resolve(fileToLoad);
								},
							);
						},
					);
				},
			);
		});
	};
else if (lib.node && lib.node.fs)
	getFile = (
		filename,
		callback = game.kongfunc,
		sync
	) => {
		let data;
		if (sync) {
			data = lib.node.fs.readFileSync(
				__dirname + '/' + filename
			);
			if (data) {
				callback(data);
			}
		} else {
			data = lib.node.fs.readFile(
				__dirname + '/' + filename,
				(err, data) => {
					if (data) {
						callback(data);
					}
				}
			);
		};
		return data;
	};  