import React from "react"

const Button =  React.forwardRef((
    {
        className,
        onClick,
        href,
        title,
        children,
        buttonSize,
        buttonColor,
        buttonVariant
    }, ref
) => {    

    const buttonSizes = ['xs', 'sm', 'md', 'lg', 'nav', 'banner']
    const buttonColors = ['black', 'white', 'gray', 'red', 'green', 'blue', 'yellow', 'white-yellow']
    
    const CHECK_BUTTON_SIZE = buttonSizes.find(x => x === buttonSize) ? buttonSize : 'md'
    const CHECK_BUTTON_COLOR = () => {
        for (let i = 0; i < buttonColors.length; i++) {
            if(buttonColor && buttonVariant === 'outline') {
                if(buttonColor === buttonColors[i]) {
                    return `outline-${buttonColor}`
                }  
            } else if (!buttonColor && buttonVariant) {
                return `outline-black`
            }  else if (buttonColor && !buttonVariant) {
                return buttonColor
            } else {
                return 'black'
            }
        }
    }
    
    return (
        <button className={`btn btn--${CHECK_BUTTON_SIZE} btn--${CHECK_BUTTON_COLOR()} ${className ? className : ''}`} onClick={onClick} title={title}>
            {children}
        </button>
    )
})

export default Button
