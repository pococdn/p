var detector_main = [];
detector_main[1] = document.getElementsByClassName('detector_main')[0].innerHTML;
detector_main[2] = document.getElementsByClassName('detector_main')[1].innerHTML;

    if(detector_main[1] = 'Episodio'){
        console.log('generando episodios...');
        document.getElementsByClassName('target')[0].className += " episodio_dt";
        if($('.episodio_dt').length == 1){
            console.log('¡generado con exito!')
        }
    }else{
        console.log('¡error!')
    }
    if(detector_main[2] = true){
        console.log('generando animes...');
        document.getElementsByClassName('target')[1].className += " anime_dt";
        if($('.anime_dt').length == 1){
            console.log('¡generado con exito!')
        }
    }else{
        console.log('¡error!')
    }
