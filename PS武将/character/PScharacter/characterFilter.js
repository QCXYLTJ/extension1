const characterFilter = {
	//武将在特定模式下禁用
	PSzuoci(mode) {
		return mode != 'guozhan';
	},
	db_PSdaweiwuwang(mode) {
		return mode != 'guozhan';
	},
};
export default characterFilter;
