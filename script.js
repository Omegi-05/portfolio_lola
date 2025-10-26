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
                        mainContent.classList.add('visible'); //l'inspecteur me saoule ici pourtant tt marche//
                        
                        setTimeout(() => {
                            loader.style.display = 'none';
                        }, 500);
                    }, 300);
                }
            }, 100);
        });

//pour partie projet avec 3 projet// 
        const projects = [
            {
                title: 'Showréel',
                description: 'mon showréeel',
                tags: ['After-Effect', 'Premiere-Pro', 'Suite-Adobes'],
                features: []
            },
            
            {
                title: 'Photoshop',
                description: 'bah photoshop quoi...feur',
                tags: ['Photoshop', 'Graphisme', 'Montage', 'Suite-Adobes'],
                features: []
            },
            {
                title: 'Illustrator',
                description: 'illustrator',
                tags: ['Illustrator', 'Illustration', 'Art', 'Suite-Adobes'],
                features: []
            }
        ];

        //activer ses actions... il est 23:47, merci au forum// 
        function openModal(index) {
            const project = projects[index];
            const modal = document.getElementById('modal');
            
            document.getElementById('modalIcon').textContent = project.icon;
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDate').textContent = project.date;
            document.getElementById('modalClient').textContent = project.client;
            document.getElementById('modalDuration').textContent = project.duration;
            document.getElementById('modalDescription').textContent = project.description;
            
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.className = 'tag';
                tagElement.textContent = tag;
                tagsContainer.appendChild(tagElement);
            });
            
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresContainer.appendChild(li);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeModalOnBackdrop(event) {
            if (event.target.id === 'modal') {
                closeModal();
            }
        }

        // Pour fermer c'est içi manuel ou avec la touche echap//
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });

        //Pour le Contact lorsqu'on m'envoie des robux 👉👈 nah en vrai c trop dure pour moi g give up//
