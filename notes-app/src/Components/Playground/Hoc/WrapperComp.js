const user = {email : "test@test.com"};

const WrapperComp = (WrappedComp) => {
    return (props) => {
        console.log("Wrapper Comp ", props)
        return (
            <WrappedComp {...props} user = {user} />
            )
    }
}

export default WrapperComp;