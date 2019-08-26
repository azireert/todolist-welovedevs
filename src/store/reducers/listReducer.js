const initialState = { list: [] }

function manageList(state = initialState, action ) {
    let refList = action.list
    let nextState = {};
    switch (action.type) {
        case 'ADD_WORKER':
            refList.push(action.value)
            return nextState = {
                list: refList
            }
        case 'DELETE_WORKER':
            //todo
            break;
        default:
            return state
    }
}

export default manageList
