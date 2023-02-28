function agentReducer(state = 0, action) {
    switch(action.type) {
        case 'AGENT':
            state = action.payload
            return state
        default: 
            return state
    }
}

export default agentReducer