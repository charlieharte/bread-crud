const React = require('react')
const baker = require('../models/baker')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index ({ breads, bakers }) {
    const breadDisplay = breads.map((bread) => {
      return (
        <li key= {bread.id}>
          <a href={`/breads/${bread.id}`}>{bread.name}</a>
        </li>
      )
    })

    const bakerDisplay = bakers.map((baker) => {
      return (
        <li key= {baker.id}>
          <a href={`/bakers/${baker.id}`}>{baker.name}</a>
        </li>
      )
    })

    return (
      <Default>
        <h2>Index Page</h2>
          <div className='newButton'>
            <a href='/breads/new'>
              <button>
                Add a new bread
              </button>
            </a>
            
          </div>
        <h3>Breads</h3>
        <u1>
          {breadDisplay}
        </u1>
        <h3>Bakers</h3>
        <ul>
          {bakerDisplay}
        </ul>
      </Default>
    )
}

module.exports = Index