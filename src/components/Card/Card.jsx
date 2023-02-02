import { Link } from "react-router-dom";
import { addFavorites, removeFavorites } from "../../redux/actions";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card (props) {
//function Card (props) {

  const  {name, species, gender, image, onClose, detailId, removeFavorites, addFavorites, myFavorites  } = props;

  const [ isFav, setIsFav ] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
        if (fav.id === detailId) {
          setIsFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite() {
    if(isFav) {
      setIsFav(false); 
      //Le pasamos el id del personaje
      removeFavorites(detailId)
    }
    else {
      setIsFav(true);
      addFavorites(props)
    }
  }

  return (
    <div className={style.container}>
      <div className={style.contentAll}>
        <div className={style.front} >
          <img src={image} alt={name} className={style.image}  />
        </div>
        <div className={style.back}>
          <h2 className={style.title}>Name: {name}</h2>
          <h2 className={style.title}>Specie: {species}</h2>
          <h2 className={style.title}>Gender: {gender}</h2>
        </div>
        <div className={style.btnContainer}>
          <div>
            <button onClick={() => onClose(detailId)} className={style.btn} >Delete</button>
          </div>
          <Link to={`/detail/${detailId}`} >
            <button className={style.btn}>View more</button>
          </Link>
        </div>
        {
        isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )  
      }
      </div>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites : function (character) {
      dispatch(addFavorites(character))
    },
    removeFavorites: function(id) {
      dispatch(removeFavorites(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);