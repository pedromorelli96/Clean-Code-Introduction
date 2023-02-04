// Clean Code: Encapsulating Conditionals Challenge

function getLoadingState(state) {
    if (hasUserLoadedSuccesfully(state)) {
        return "Finished Loading";
    }

    if (isUserLoadingSuccesfully(state)) {
        return "Loading...";
    }

    return "Error occured";
}

function hasUserLoadedSuccesfully(state) {
    return !!state.user && state.loading === false && state.hasError === false;
}

function isUserLoadingSuccesfully(state) {
    return (
        state.user === null &&
        state.loading === true &&
        state.hasError === false
    );
}
