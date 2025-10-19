//pour le CV : //
const url = "Cv_Othon_Lola.pdf";
    const filename = "Cv_Othon_Lola.pdf";

    function GetResume()
    {
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

//pour le scroll : //
document.querySelectorAll('nav button[data-target]').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' }); // pour le scroll soit styler //
        }
    });
});

//pour le chargement :  //
       window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const mainContent = document.getElementById('mainContent');
            const progressFill = document.getElementById('progressFill');

            //la barre de progression //
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressFill.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    
                    // fin du chargééééé //
                    setTimeout(() => {
                        loader.classList.add('fade-out');
                        mainContent.classList.add('visible');
                        
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 500);
                    }, 300);
                }
            }, 100);
        });

        //le caroussel pour perso//
   