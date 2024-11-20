import PropTypes from 'prop-types'
import React from 'react'

const Snackbar = ({ snackbar }) => {

    return (
        <>
            {snackbar.open && (
                <div className={`snackbar  ${snackbar.type}`}>
                    <span className="">{snackbar.message}</span>
                </div>
            )}
        </>


    )
}

Snackbar.propTypes = {
    snackbar: PropTypes.object
}



export default Snackbar