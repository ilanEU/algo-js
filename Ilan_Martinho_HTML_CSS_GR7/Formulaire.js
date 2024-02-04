document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      // Validation du champ nom et prénom (au moins 2 caractères)
      const nomPrenom = document.getElementById('nom').value.trim();
      if (nomPrenom.length < 2) {
          alert('Le nom et le prénom doivent avoir au moins 2 caractères.');
          event.preventDefault();
      }

      // Validation du champ e-mail (doit contenir @)
      const email = document.getElementById('email').value.trim();
      if (!email.includes('@')) {
          alert('L\'adresse e-mail doit contenir @.');
          event.preventDefault();
      }

      // Validation du champ code postal (au moins 5 chiffres)
      const codePostal = document.getElementById('codePostal').value.trim();
      if (isNaN(codePostal) || codePostal.length < 5) {
          alert('Le code postal doit contenir au moins 5 chiffres.');
          event.preventDefault();
      }

      // Validation des champs de mot de passe (identiques et au moins 6 caractères)
      const motDePasse = document.getElementById('motDePasse').value;
      const confirmerMotDePasse = document.getElementById('confirmerMotDePasse').value;

      if (motDePasse.length < 6) {
          alert('Le mot de passe doit avoir au moins 6 caractères.');
          event.preventDefault();
      }

      if (motDePasse !== confirmerMotDePasse) {
          alert('Les mots de passe ne correspondent pas.');
          event.preventDefault();
      }

      // Si toutes les validations sont réussies, rediriger vers la page de confirmation
      if (nomPrenom.length >= 2 && email.includes('@') && !isNaN(codePostal) && codePostal.length >= 5 && motDePasse.length >= 6 && motDePasse === confirmerMotDePasse) {
          window.location.href = "confirmation.html";
      }
  });
});