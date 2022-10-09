let i, e;
for(i = 0;i < 5; i++){
    if(genero[i] != ''){
        genero[i] = '<a href="../../search/label/'+genero[i]+'">'+genero[i]+'</a>';
    }else{
        genero[i] = '';
    }
};
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
if(prox_epi != undefined){
    var prox_episodio = `
<a href="#"><li class="link-episode border">
                    <div class="episode-img">
                        <div class="banner-img"><img src="https://i.imgur.com/nzVuY3z.jpeg"></div>
                    </div>
                    <div class="content">
                        <strong class="sinopsis">SE ESTRENA EL `+prox_epi+`</strong>
                        <span class="episode">Episodio `+episodio.length+`</span>
                    </div></li></a>
`}else{var prox_episodio = ''};

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
        <div class="anime-tags">`+genero.toString().replace(new RegExp(",","gi"),"")+`</div>
    </div>
</div>
<div class="status--anime `+estado+`"></div>
<div class="episode-text">Lista de episodios</div>
<div class="episode-container">
    <ul class="list-episodes">`+episodio.toString().replace(new RegExp(",","gi"),"")+prox_episodio+`</ul>
</div>
`;
