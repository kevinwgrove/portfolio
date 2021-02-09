export const reducer = (state, action) => {
    switch(action.type) {
        case "table":
            return {
                ...state,
                table: action.payload
            };
        case "league":
            return {
                ...state,
                league: action.payload
            };
        default:
            return state
    }
}