import React from 'react'
import PropTypes from 'prop-types'



const Bus = ({ name, agency_name}) => [
    <div>
        <h2>{name}</h2>
        <h2>{agency_name}</h2>
    </div>
]

Bus.propTypes = {
    name : PropTypes.string.isRequired,
    agency_name: PropTypes.string.isRequired
}

export default Bus