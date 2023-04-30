const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index ({ breads }) {
    const display = breads.map((bread, i) => {
      return (
        <li key= {i}>
          <a href={`/breads/${i}`}>{bread.name}</a>
        </li>
      )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <u1>
          {display}
        </u1>
      </Default>
    )
}

module.exports = Index