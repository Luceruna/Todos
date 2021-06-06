import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        <FilterLink filter = "ShowAll">全て</FilterLink>
        { ', ' }
        <FilterLink filter = "ShowActive">未完了</FilterLink>
        { ', ' }
        <FilterLink filter = "ShowCompleted">完了</FilterLink>
    </p>
)

export default Footer