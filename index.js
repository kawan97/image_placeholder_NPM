function getImage(width=400,height=400){
    var url='https://picsum.photos/'+width+'/'+height
    fetch(url)
  .then((response) => response.json())
  .then((data) => data);
 
}

exports.getImage =getImage
export default getImage;
