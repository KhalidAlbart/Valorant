function agentAction(abilities) {
    return {
        type: 'AGENT',
        payload: abilities
    }
}

export default agentAction