import { menuActions } from "../actions";

const { DISPLAY_MAIN_MENU } = menuActions;

export const displayMainMenu = () => {
	return {
		type: DISPLAY_MAIN_MENU
	};
};
