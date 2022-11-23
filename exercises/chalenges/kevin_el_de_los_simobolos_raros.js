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
}
console.assert(identificador("<")==='&lt', 'should return glt when given <')
