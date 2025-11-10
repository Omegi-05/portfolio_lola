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

        //DRAG AND PAS DROP//
        window.onload=function() {

  const nerdy = document.getElementById('nerdy');
  
  let dragging = false;
  let offsetX = 0, offsetY = 0; 

  function getRect(el){ return el.getBoundingClientRect(); }

  function isOverTarget() {
    const s = getRect(nerdy);
    const t = getRect(target);

    const cx = s.left + s.width/2;
    const cy = s.top  + s.height/2;
    return (cx >= t.left && cx <= t.right && cy >= t.top && cy <= t.bottom);
  }

  function onPointerDown(e){

    if(e.target !== nerdy) return;

    dragging = true;
    nerdy.classList.add('dragging');
    nerdy.setPointerCapture(e.pointerId);

    const s = getRect(nerdy);

    offsetX = e.clientX - s.left;
    offsetY = e.clientY - s.top;
    e.preventDefault();
  }

  function onPointerMove(e){
    if(!dragging) return;

    const st = getRect(stage);

    let left = e.clientX - st.left - offsetX;
    let top  = e.clientY - st.top  - offsetY;

    const maxLeft = st.width  - nerdy.offsetWidth;
    const maxTop  = st.height - nerdy.offsetHeight;
    left = Math.max(0, Math.min(left, maxLeft));
    top  = Math.max(0, Math.min(top,  maxTop));

    nerdy.style.left = left + 'px';
    nerdy.style.top  = top  + 'px';

    target.classList.toggle('over', isOverTarget());
  }

  function onPointerUp(e){
    if(!dragging) return;
    dragging = false;
    nerdy.classList.remove('dragging');
    target.classList.toggle('over', false);

    if(isOverTarget()){
      const t = getRect(target), st = getRect(stage);
      const left = (t.left - st.left) + (t.width - nerdy.offsetWidth)/2;
      const top  = (t.top  - st.top ) + (t.height - nerdy.offsetHeight)/2;
      nerdy.style.left = `${left}px`;
      nerdy.style.top  = `${top}px`;
    }
  }

  
  // Écouteurs sur la scène (fonctionne souris + tactile)
  stage.addEventListener('pointerdown', onPointerDown);
  stage.addEventListener('pointermove', onPointerMove);
  stage.addEventListener('pointerup', onPointerUp);
  stage.addEventListener('pointercancel', onPointerUp);
}
