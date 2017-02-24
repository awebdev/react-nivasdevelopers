import React from 'react'
import PoolImg from './assets/pool-3d-view.jpg'

export const ProjectDescription = () => (
  <div className='row'>
    <div className='box'>
      <div className='col-lg-12'>
        <hr />
        <h2 className='intro-text text-center'>
          A place <strong>worth living in</strong>
        </h2>
        <hr />

        <img className='img-responsive img-border img-left' src={PoolImg} alt='' />
        <hr className='visible-xs' />
        <p>
          &nbsp;Vaidehi Nivas Golden Palms, a gated community by reputed builders Nivas Developers is a first of its
          &nbsp;kind mega residential complex in Vidhyanagar, Hyderabad, ideally located in the vincity of massive
          &nbsp;greenery and open spaces of vast Osmania University. This project would redefine the luxury of living
          &nbsp;with the state of art design and ultra modern club house with abundant and thoughtful green spaces.
        </p>
      </div>
    </div>
  </div>
)

export default ProjectDescription
