if(anterior_available == false) {var anterior_available = '';}else{var anterior_available = `
<a href="`+anterior_link+`" class="cv-player-trigger">
<svg viewBox="0 0 24 24">
    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg> ant.
</a>
`};
if(siguiente_available == false) {var siguiente_available = '';}else{var siguiente_available = `
<a href="`+siguiente_link+`" class="cv-player-trigger">
        <svg sviewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
        sig.
    </a>
`};
document.getElementById('episode--import').innerHTML = `
<ol class="breadcrumb">
	<li class="breadcrumb-item"> <a href="/">Inicio</a></li>
	<li class="breadcrumb-item"> <a href="`+anime_link+`">`+anime+`</a></li>
	<li class="breadcrumb-item">Episodio `+episodio_number+`</li>
</ol>
<div class="episode-texts">
	<span class="episode-title">`+anime+`</span>
	<span class="episode-number">Episodio `+episodio_number+`</span>
</div>
<div class="cv-player">
<div class="cv-player-body">
    <div class="cv-player-embed">
        <iframe src="https://byte-animelat.blogspot.com/?vid=`+server_default+`" allowFullScreen></iframe>
    </div>
</div>
<div class="cv-player-flex">
<div class="cv-player-action">
<div>
    <div id="server" class="cv-player-trigger">
    <svg viewBox="0 0 24 24">
        <path d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
    </svg>
    Servidores</div>
</div>
<div class="cv-player-outside">
    <div class="cv-player-select">
    <div>
      <button data-caption="720p" data-src="`+server_1+`">OPCIÓN 01 <span>Zplayer</span></button>
      <button data-caption="720p" data-src="`+server_2+`">OPCIÓN 02 <span>Fembed</span></button>
      <button data-caption="720p" data-src="`+server_3+`">OPCIÓN 03 <span>Mega</span></button>
      <button data-caption="720p" data-src="`+server_4+`">OPCIÓN 04 <span>Stape</span></button>
      <button data-caption="720p" data-src="`+server_5+`">OPCIÓN 05 <span>Netu</span></button>
      <button data-caption="720p" data-src="`+server_6+`">OPCIÓN 06 <span>MixDrop</span></button>
    </div>
    <span class="cv-player-close">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
        </span>
    </div>
</div>
<div class="cv-player-download">
    <label for="cvDL" class="cv-player-trigger is-dropdown">
    <svg viewBox="0 0 24 24"><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg></label>
    <input type="checkbox" id="cvDL"/>
    <ul>
      <li>
        <a target="_blank" href="`+download_1+`">Mega<span>720p</span></a>
        <a target="_blank" href="`+download_2+`">Mediafire<span>720p</span></a>
        <a target="_blank" href="`+download_3+`">Zippyshare<span>720p</span></a>
      </li>
    </ul>
</div>
</div>
<div class="cv-player-nav">
`+anterior_available+siguiente_available+`
<a href="`+anime_link+`" class="cv-player-trigger">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
    </svg>
</a>
</div>
</div>

</div>
`;
