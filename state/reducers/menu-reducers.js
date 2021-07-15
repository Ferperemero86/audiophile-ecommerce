import { menuActions } from "../actions";

const { DISPLAY_MAIN_MENU } = menuActions;

const initialState = {
	mainMenu: {
		display: false
	}
};

export const menu = (state = initialState, action) => {
	const mainMenuDisplay = !state.mainMenu.display;

	switch (action.type) {
		case DISPLAY_MAIN_MENU:
			return {
				...state,
				mainMenu: { ...state.mainMenu, display: mainMenuDisplay }
			};
		default:
			return state;
	}
};
