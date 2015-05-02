var cssSprite = require('css-sprite');

module.exports = function(command, bone) {
	var cmder = command('css-sprite')
		.option('--src <source>', 'glob strings to find source images to put into the sprite')
		.option('--out <filepath>', 'path of directory to write sprite file to')
	 	.option('-b, --base64        ', 'create css with base64 encoded sprite (css file will be written to <out>)')
		.option('-c, --css-image-path [cssImagePath]', 'http path to images on the web server (relative to css path or absolute path)  [../images]')
		.option('-f, --format [format]', 'output format of the sprite (png or jpg)  [png]')
		.option('-n, --name [name]', 'name of sprite file without file extension   [sprite]')
		.option('-p, --processor [processor]', 'output format of the css. one of css, less, sass, scss or stylus  [css]')
		.option('-t, --template [template]', 'output template file, overrides processor option')
		.option('-r, --retina        ', 'generate both retina and standard sprites. src images have to be in retina resolution (doubled dimensions, with even-numbered height and width)')
		.option('-s, --style <style>', 'file to write css to, if omitted no css is written')
		.option('--background [background]', 'background color of the sprite in hex  [#FFFFFF]')
		.option('--margin [margin]', 'margin in px between tiles  [4]')
		.option('--opacity [opacity]', 'background opacity of the sprite. defaults to 0 when png or 100 when jpg  [0]')
		.option('--orientation [orientation]', 'orientation of the sprite image (vertical|horizontal|binary-tree)  [vertical]')
		.option('--prefix [prefix]', 'prefix for the class name used in css (without .)')
		.action(function() {
			['src', 'out', 'style'].forEach(function(opt) {
				if(cmder.hasOwnProperty(opt)) {
					cmder[opt] = bone.fs.pathResolve(cmder[opt]);
				}
			});
			cssSprite.create(cmder);
		});
};