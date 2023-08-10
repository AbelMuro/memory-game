export default function themeReducer(theme = 'Numbers', action) {
    switch(action.type){
        case 'change theme':
            return action.theme;
        default:
            return theme;
    }
}