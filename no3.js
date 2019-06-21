let mxarray = [[5,4,6],[7,3,5],[9,4,6]]

function matrix(aray){
    var mx = [];
    for(var x = 0; x < aray.length; x++){
        mx.push([]);
    };

    for(var x = 0; x < aray.length; x++){
        for(var y = 0; y <aray[x].length; y++){
            mx[y].push(aray[x][y]);
        };
    }
    return mx;
}
console.log(matrix(mxarray))
