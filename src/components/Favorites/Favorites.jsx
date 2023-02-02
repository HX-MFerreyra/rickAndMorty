import { connect } from "react-redux";

function Favorites({myFavorites}) {
    console.log(myFavorites);
    return (
        <div>
            <h2>My Favorites</h2>
            {
                myFavorites?.map((character) => (
                    <div>
                        <h2>{character.name}</h2>
                        <h2>{character.gender}</h2>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))
            }
        </div>
    );
}

export function mapStateToProps(state) {
    return {
        myFavorites : state.myFavorites
    }
}



export default connect(mapStateToProps)(Favorites);