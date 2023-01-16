function identificador(character) {
    if (character === '<') {
        return '&lt';
    } else if (character === '>') {
        return '&gt';
    }else if(character==='"'){
        return  '&quot';
    }else if(character=='&'){
    return '&amp';
    }
    // switch(identificador){
    //     case '<':
    //        return '&lt';
    //         break;
    //     case  '>':
    //        return '&gt'
    //         break;
    //     case '"':
    //         return '&quot'
    //         break;
    //     case '&':
    //         return  '&amp'
    //         break;

    //}

}

module.exports = identificador;
