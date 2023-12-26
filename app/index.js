// const Anime_Images = require('anime-images-api');
import Anime_Images from 'anime-images-api'

export async function buscarImagem(){
    const API = new Anime_Images()
    let { image } = await API.sfw.hug()
    console.log(image)
}  
   
buscarImagem();

