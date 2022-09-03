function getImage(width=400,height=400){
    var url='https://picsum.photos/'+width+'/'+height
   return url
 
}
exports.default = getImage; 
exports.getImage =getImage
