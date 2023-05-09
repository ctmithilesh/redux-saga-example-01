import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCatsFetch } from "../../reducers/catReducer";
import { getDogsFetch } from "../../reducers/dogReducer";

export default function Welcome() {

    const dispatch = useDispatch()
    useEffect(()=>{

            dispatch(getCatsFetch())
            dispatch(getDogsFetch())

    },[dispatch])
    
  return (
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Animals.com </h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
}
