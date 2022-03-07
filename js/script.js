// Menagkap semua elemen yang akan dirubah warnanya

// Pewarnaan dasar
    // Background
    const bgWarna1 = document.getElementsByClassName('bgWarna1');
    const bgWarna2 = document.getElementsByClassName('bgWarna2');
    const bgWarna3 = document.getElementsByClassName('bgWarna3');
    // Teks
    const teksWarna1 = document.getElementsByClassName('teksWarna1');
    const teksWarna2 = document.getElementsByClassName('teksWarna2');
    const teksWarna3 = document.getElementsByClassName('teksWarna3');
// Akhir Pewarnaan dasar

// Navbar
    // Wadah Link Navbar
    const navItem = document.getElementsByClassName('nav-item');
// Akhir Navbar

// Home
    // Foto pada home
    const fotoHomeSrc = document.getElementById('fotoHome');
    const cadanganFotoHomeWebp = document.getElementById('cadanganFotoHomeWebp');
    const cadanganFotoHomePng = document.getElementById('cadanganFotoHomePng');
// Akhir Home

// About
    // Foto About 1
    const fotoAbout1Src = document.getElementById('fotoAbout1');
    const cadanganFotoAbout1Webp = document.getElementById('cadanganFotoAbout1Webp');
    const cadanganFotoAbout1Png = document.getElementById('cadanganFotoAbout1Png');
    // Foto About 2
    const fotoAbout2Src = document.getElementById('fotoAbout2');
    const cadanganFotoAbout2Webp = document.getElementById('cadanganFotoAbout2Webp');
    const cadanganFotoAbout2Png = document.getElementById('cadanganFotoAbout2Png');  
    // Foto About 3
    const fotoAbout3Src = document.getElementById('fotoAbout3');
    const cadanganFotoAbout3Webp = document.getElementById('cadanganFotoAbout3Webp');
    const cadanganFotoAbout3Png = document.getElementById('cadanganFotoAbout3Png');
    // Resume edukasi dan organisasi
    const cardHeader = document.getElementsByClassName('card-header');
    const resumePositionTitle = document.getElementsByClassName('resume-position-title');
    const resumeTimelineItem = document.getElementsByClassName('resume-timeline-item');
    const resumeTimeline = document.getElementsByClassName('resume-timeline');
// Akhir About

// Footer
    //Gelombang Footer 
    const gelombangFooter = document.getElementById('gelombangFooter');
// Akhir Footer

// Tombol Dark Mode
    // Menangkap tombol dark mode
    const tombolDarkMode = document.getElementById('toggleDarkMode');
    // Ketika timbol dark mode diklik
    tombolDarkMode.addEventListener('click',function(){
        // Mengubah background warna 1
        for(let i=0; i<bgWarna1.length; i++){
            bgWarna1[i].classList.toggle('bgWarna1Light');
            bgWarna1[i].classList.toggle('bgWarna1Dark');
        }
        // Mengubah background warna 2
        for(let i=0; i<bgWarna2.length; i++){
            bgWarna2[i].classList.toggle('bgWarna2Light');
            bgWarna2[i].classList.toggle('bgWarna2Dark');
        }
        // Mengubah background warna 3
        for(let i=0; i<bgWarna3.length; i++){
            bgWarna3[i].classList.toggle('bgWarna3Light');
            bgWarna3[i].classList.toggle('bgWarna3Dark');
        }
        // Merubah warna teks
        for(var i = 0 ; i < teksWarna1.length ; i++){
        teksWarna1[i].classList.toggle('teksWarna1Light');
            teksWarna1[i].classList.toggle('teksWarna1Dark');
        }
        for(var i = 0 ; i < teksWarna2.length ; i++){
            teksWarna2[i].classList.toggle('teksWarna2Light');
            teksWarna2[i].classList.toggle('teksWarna2Dark');
        }
        for(var i = 0 ; i < teksWarna3.length ; i++){
            teksWarna3[i].classList.toggle('teksWarna3Light');
            teksWarna3[i].classList.toggle('teksWarna3Dark');
        }
        // Mengubah Wadah Link Navbar
        for(var i = 0 ; i < navItem.length ; i++){
            navItem[i].classList.toggle('nav-itemLight');
            navItem[i].classList.toggle('nav-itemDark');
        }
        // Mengubah Foto Home
        // Foto Home Inti
        if(fotoHomeSrc.getAttribute('src')=='img/home/fotoProfilLight.webp'){
            fotoHomeSrc.setAttribute('src','img/home/fotoProfilDark.webp');
        }else{
            fotoHomeSrc.setAttribute('src','img/home/fotoProfilLight.webp');
        }
        // Cadangan Foto Home Webp
        if(cadanganFotoHomeWebp.getAttribute('srcset')==
        'img/home/fotoProfilLight.webp'){
            cadanganFotoHomeWebp.setAttribute('srcset',
            'img/home/fotoProfilDark.webp');
        }else{
            cadanganFotoHomeWebp.setAttribute('srcset',
            'img/home/fotoProfilLight.webp');
        }
        // Cadangan Foto Home png
        if(cadanganFotoHomePng.getAttribute('srcset')==
        'img/home/fotoProfilLight.png'){
            cadanganFotoHomePng.setAttribute('srcset',
            'img/home/fotoProfilDark.png');
        }else{
            cadanganFotoHomePng.setAttribute('srcset',
            'img/home/fotoProfilLight.png');
        }    
        //Mengubah Foto About 1
            // Foto About 1 Inti
            if(fotoAbout1Src.getAttribute('src')=='img/about/fotoAbout1Light.webp'){
                fotoAbout1.setAttribute('src','img/about/fotoAbout1Dark.webp');
            }else{
                fotoAbout1.setAttribute('src','img/about/fotoAbout1Light.webp');
            }
            // Cadangan Foto About 1 Webp
            if(cadanganFotoAbout1Webp.getAttribute('srcset')==
            'img/about/fotoAbout1Light.webp'){
                cadanganFotoAbout1Webp.setAttribute('srcset',
                'img/about/fotoAbout1Dark.webp');
            }else{
                cadanganFotoAbout1Webp.setAttribute('srcset',
                'img/about/fotoAbout1Light.webp');
            }
            // Cadangan Foto About 1 png
            if(cadanganFotoAbout1Png.getAttribute('srcset')==
            'img/about/fotoAbout1Light.png'){
                cadanganFotoAbout1Png.setAttribute('srcset',
                'img/about/fotoAbout1Dark.png');
            }else{
                cadanganFotoAbout1Png.setAttribute('srcset',
                'img/about/fotoAbout1Light.png');
            }
        //Mengubah Foto About2
            // Foto About2 Inti
            if(fotoAbout2Src.getAttribute('src')=='img/about/fotoAbout2Light.webp'){
                fotoAbout2.setAttribute('src','img/about/fotoAbout2Dark.webp');
            }else{
                fotoAbout2.setAttribute('src','img/about/fotoAbout2Light.webp');
            }
            // Cadangan Foto About2 Webp
            if(cadanganFotoAbout2Webp.getAttribute('srcset')==
            'img/about/fotoAbout2Light.webp'){
                cadanganFotoAbout2Webp.setAttribute('srcset',
                'img/about/fotoAbout2Dark.webp');
            }else{
                cadanganFotoAbout2Webp.setAttribute('srcset',
                'img/about/fotoAbout2Light.webp');
            }
            // Cadangan Foto About2 png
            if(cadanganFotoAbout2Png.getAttribute('srcset')==
            'img/about/fotoAbout2Light.png'){
                cadanganFotoAbout2Png.setAttribute('srcset',
                'img/about/fotoAbout2Dark.png');
            }else{
                cadanganFotoAbout2Png.setAttribute('srcset',
                'img/about/fotoAbout2Light.png');
            }
        //Mengubah Foto About 3
            // Foto About 3 Inti
            if(fotoAbout3Src.getAttribute('src')=='img/about/fotoAbout3Light.webp'){
                fotoAbout3Src.setAttribute('src','img/about/fotoAbout3Dark.webp');
            }else{
                fotoAbout3Src.setAttribute('src','img/about/fotoAbout3Light.webp');
            }
            // Cadangan Foto About 3 Webp
            if(cadanganFotoAbout3Webp.getAttribute('srcset')==
            'img/about/fotoAbout3Light.webp'){
                cadanganFotoAbout3Webp.setAttribute('srcset',
                'img/about/fotoAbout3Dark.webp');
            }else{
                cadanganFotoAbout3Webp.setAttribute('srcset',
                'img/about/fotoAbout3Light.webp');
            }
            // Cadangan Foto About 3 png
            if(cadanganFotoAbout3Png.getAttribute('srcset')==
            'img/about/fotoAbout3Light.png'){
                cadanganFotoAbout3Png.setAttribute('srcset',
                'img/about/fotoAbout3Dark.png');
            }else{
                cadanganFotoAbout3Png.setAttribute('srcset',
                'img/about/fotoAbout3Light.png');
            }
        // Merubah bagian resume edukasi dan organisasi
            // Merubah Card Header
            for(var i = 0 ; i < cardHeader.length ; i++){
                cardHeader[i].classList.toggle("card-headerLight");
                cardHeader[i].classList.toggle("card-headerDark");
            }
            // Merubah resume position title
            for(var i = 0 ; i < resumePositionTitle.length ; i++){
                resumePositionTitle[i].classList.toggle("resume-position-titleLight");
                resumePositionTitle[i].classList.toggle("resume-position-titleDark");
            }
            // Merubah resume timeline item
            for(var i = 0 ; i < resumeTimelineItem.length ; i++){
                resumeTimelineItem[i].classList.toggle("resume-timeline-itemLight");
                resumeTimelineItem[i].classList.toggle("resume-timeline-itemDark");
            }
            // Merubah resume timeline
            for(var i = 0 ; i < resumeTimeline.length ; i++){
                resumeTimeline[i].classList.toggle("resume-timelineLight");
                resumeTimeline[i].classList.toggle("resume-timelineDark");
            } 
            // Merubah warna gelombang footer
            // Merubah gelombang Footer
            if(gelombangFooter.getAttribute('fill')=='#FDCA8C'){
                gelombangFooter.setAttribute('fill','#0B0B41');
            }else{
                gelombangFooter.setAttribute('fill','#FDCA8C');
            }
    });
// Akhir tombol dark mode