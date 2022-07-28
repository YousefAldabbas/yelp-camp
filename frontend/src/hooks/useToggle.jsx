import React from 'react'

function useToggle() {
    const [isToggled, setToggle] = React.useState(false)
    const toggle = () => setToggle(!isToggled)
    return [isToggled, toggle]
}

export default useToggle