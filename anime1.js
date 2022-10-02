let i, e;
for(i = 0;i < 5; i++){
    if(genero[i] != ''){
        genero[i] = '<a href="../../search/label/'+genero[i]+'">'+genero[i]+'</a>';
    }else{
        genero[i] = '';
    }
};
for(e = 0;e < 51; e++){
    episodio[e] = ''
}
for(e = 1;e < titulo_episodio.length; e++){
    episodio[e] = `
    <a href="`+link_episodio[e]+`"><li class="link-episode border">
                    <div class="episode-img">
                        <div class="banner-img"><img src="`+image_episodio[e]+`"></div>
                    </div>
                    <div class="content">
                        <strong class="sinopsis">`+titulo_episodio[e]+`</strong>
                        <span class="episode">Episodio `+e+`</span>
                    </div></li></a>
    `;
};
document.getElementById('anime--import').innerHTML = `
<ol class="breadcrumb">
<li class="breadcrumb-item"> <a href="/">Inicio</a></li>
<li class="breadcrumb-item">`+titulo+`</li>
</ol>
<div class="poster-container" style="background-image: url(`+banner+`);">
    <div class="poster-blur `+tipo+`"></div>
    <img src="`+banner+`">
    <div class="cont_anime-container">
        <span class="anime-title">`+titulo+`</span>
        <strong class="anime-sinopsis" style="text-align: justify;">`+sinopsis+`</strong>
        <div class="anime-tags">`+genero[0]+genero[1]+genero[2]+genero[3]+genero[4]+genero[5]+`</div>
    </div>
</div>
<div class="status--anime `+estado+`"></div>
<div class="episode-text">Lista de episodios</div>
<div class="episode-container">
    <ul class="list-episodes">`+episodio[1]+episodio[2]+episodio[3]+episodio[4]+episodio[5]+episodio[6]+episodio[7]+episodio[8]+episodio[9]+episodio[10]+episodio[11]+episodio[12]+episodio[13]+episodio[14]+episodio[15]+episodio[16]+episodio[17]+episodio[18]+episodio[19]+episodio[20]+episodio[21]+episodio[22]+episodio[23]+episodio[24]+episodio[25]+episodio[26]+episodio[27]+episodio[28]+episodio[29]+episodio[30]+episodio[31]+episodio[32]+episodio[33]+episodio[34]+episodio[35]+episodio[36]+episodio[37]+episodio[38]+episodio[39]+episodio[40]+episodio[41]+episodio[42]+episodio[43]+episodio[44]+episodio[45]+episodio[46]+episodio[47]+episodio[48]+episodio[49]+episodio[50]+`</ul>
</div>
`;
