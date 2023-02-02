import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Detail.module.css';

export default function Detail() {
    const { detailId } = useParams();
    //console.log(detailId);

    const navigate = useNavigate();

    const [character, setCharacter] = useState({});
    //console.log(character);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);

    const handleClick = ()=> {
        navigate('/');
    }

    return (
        <>
        <div className={style.containerBtnBack}>
            <button onClick={handleClick} className={style.backHome}>Back to home</button>
        </div>
        {
            character ? (
                <div className={style.container}>
                    <div className={style.title} >
                        <h1>{character.name}</h1>
                        <h3>Status: {character.status}</h3>
                        <h3>Species: {character.species}</h3>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Origin: {character.origin?.name}</h3>
                    </div>
                    <div >
                        <img src={character.image} alt={character.name} className={style.image} />
                    </div>
                </div>
            ) : ( "" )
        }
        </>
    )
}