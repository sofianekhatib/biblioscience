document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner les éléments de la sidebar
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  const contentElement = document.getElementById("content");

  // Fonction pour changer le contenu
  function updateContent(section) {
    let content = '';

    switch(section) {
      case "home":
        content = `<h2><span>H</span>ome</h2>
        <h3>
    <p>Hi, I'm Sofiane Khatib</p>
    <p>I’m 20 years old, and I’m originally from Morocco. I currently live in Beni Mellal, where I study as a student in the faculty of sciences and techniques (FST).
     I have a passion for programming. In my free time, you’ll often find me learning programming languages, and I’m always excited to learn more about Computer science.</p>
    </h3>
     <div class="profile">
            <img src="img/WhatsApp Image 2024-11-10 à 14.41.31_d691621b.jpg" alt="SOFIANE KHATIB">
       </div>
        `;
        break;
      case "courses":
        content = `
          <h2><span>C</span>ourses</h2>
    <h4><p>Veuillez choisir votre parcours:</p></h4>
    <a href="https://drive.google.com/drive/folders/1LBuI29nWl2TipIv1aYeA9glcmEIqYkny?usp=sharing" target="_blank">
        <button id="mipBtn">PARCOURS MIP</button>
    </a>
    <a href="https://drive.google.com/drive/folders/19wl7oxGsV335koN4gWA_MJWRVz29IFUp?usp=sharing" target="_blank">
        <button id="gegmBtn">PARCOURS GEGM</button>
    </a>
    <a href="https://drive.google.com/your-drive-link-for-bcg" target="_blank">
        <button id="bcgBtn">PARCOURS BCG</button>
    </a>
    <a href="https://mega.nz/folder/uB42lKQZ#GtPUgfVnTJbEqFF6L8yACA" target="_blank">
        <button id="megaBtn">MEGA</button>
    </a>
        `;
        break;
      case "informatique":
        content = `
          <h2><span>I</span>nformatique</h2>
<h4><p>Veuillez choisir votre language:</p></h4>
<a href="https://drive.google.com/file/d/1Lns5x2mSTw9A-prOpjuXFIbXcwUUybs5/view?usp=sharing" download="reactjs.pdf" target="_blank">
    <button id="btn1">PHP</button>
</a>
<a href="https://drive.google.com/file/d/1grg9SbqPt7heBbGdP0UaRB6CvKIZ0g5J/view?usp=sharing" download="html.pdf" target="_blank">
    <button id="btn2">HTML</button>
</a>
<a href="https://example.com/path/to/css.pdf" download="css.pdf" target="_blank">
    <button id="btn3">CSS</button>
</a>
<a href="https://example.com/path/to/javascript.pdf" download="javascript.pdf" target="_blank">
    <button id="btn4">JAVASCRIPT</button>
</a>
<a href="https://drive.google.com/file/d/1M2FWm2ukcYjnk0IbpNHOnwaS_wG2fymJ/view?usp=sharing" download="c_language.pdf" target="_blank">
    <button id="btn5">JAVA</button>
</a>
<a href="https://drive.google.com/file/d/1mOdKqWtnFxOp2mve1vEgsp-DIOBJCx6j/view?usp=sharing" download="sql.pdf" target="_blank">
    <button id="btn6">SQL</button>
</a>
<a href="https://drive.google.com/file/d/1YwUwtF4DxZMXixdkQRfPVNhGbveXWL5d/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn7">PYTHON</button>
</a>
<a href="https://drive.google.com/file/d/1bttJZu0Q0UHXq9WKxm7r8a-0p-ibmEBz/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn8">C++</button>
</a>
<a href="https://drive.google.com/file/d/1EeA80_T9riDGpDksJKVaoNNEFvi6E50U/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn9">Git</button>
</a>
<a href="https://drive.google.com/file/d/1IPcM1FOJN7xRFVt4tQvaonm7-0u0A-Ad/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn10">Mongo BD</button>
</a>
<a href="https://drive.google.com/file/d/1xFAB4niSdapyYFthQsQj95nt6vhANkMb/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn11">JS INTERVIEW QSTS</button>
</a>
<a href="https://drive.google.com/file/d/1noUnNdo5tkIlDuCmaBOcjHn9k22jRNIK/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn12">JAVA INTERVIEW QSTS</button>
</a>
<a href="https://drive.google.com/file/d/16yL7FLI8zSE5u-yZ_xqs96QlIRHMS60O/view?usp=sharing" download="python.pdf" target="_blank">
    <button id="btn12">SQL COMMANDS</button>
</a>

        `;
        break;
      case "contact":
        content = `
        <h2><span>C</span>ontact</h2>
    <h4><p>You can catch me mere :</p></h4>
    <div class="social">
       <a href="https://www.instagram.com/sofianekhatiib/profilecard/?igsh=MXF3cGxrcjFha2s3Yw==" class="social-link">
                <ion-icon name="logo-instagram">Instagram</ion-icon>
       </a>
       <a href="https://www.linkedin.com/in/sofiane-khatib-5b775332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="social-link">
                <ion-icon name="logo-linkedIn">LinkedIn</ion-icon>
       </a>
       <a href="https://www.facebook.com/soufiyane.khatib" class="social-link">
                <ion-icon name="logo-facebook">Facebook</ion-icon>
       </a>
       <a href="https://www.instagram.com/sofianekhatiib/profilecard/?igsh=MXF3cGxrcjFha2s3Yw==" class="social-link">
                <ion-icon name="logo-twitter">Email</ion-icon>
       </a>
      </div>
      <div class="Contacts">
          <div class="contact-info">
              <p class="contact-title"><h5><span>Email</span></h5></p>
              <a href="mailto:soufianekhatib652@gmail.com" class="contact-link">soufianekhatib652@gmail.com </a>
            </div>
            <div class="contact-info">
              <p class="contact-title"><h5><span>Phone</span></h5></p>

              <a href="tel:+212772817824" class="contact-link">+212772817824</a>
            </div>
             <div class="contact-info">
              <p class="contact-title"><h5><span>Birthday</span></h5></p>

              <time datetime="1982-06-23">4 March, 2004</time>
            </div>
            <div class="contact-info">
              <p class="contact-title"><h5><span>Location</span></h5></p>

              <address>Beni Mellal, Morocco</address>
            </div>
            </div>
        `;
        break;
      default:
        content = `<h1><span>W</span>elcome <span>E</span>veryone <br>to <span>E</span>duVerse</h1>`;
        break;
    }

    // Mettre à jour le contenu
    contentElement.innerHTML = content;
  }

  // Ajouter un écouteur d'événements pour chaque lien de la sidebar
  sidebarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Empêcher le comportement par défaut du lien
      e.preventDefault();

      // Récupérer l'id du lien et appeler la fonction updateContent
      const sectionId = e.target.id.replace("Btn", "").toLowerCase();
      updateContent(sectionId);
    });
  });
});

