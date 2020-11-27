import React from 'react';

import Card from '../Card'

const CardList = (props) => {
    function getUnique(arr, comp) {

        // store the comparison  values in array
        const unique =  arr.map(e => e[comp])
    
        //   store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e]).map(e => arr[e]);
    
        return unique;
      }
    
      const uniqueProfile = getUnique(props.profiles,'id');
    
      return (
        <div>
          {uniqueProfile.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
      )
}

export default CardList;