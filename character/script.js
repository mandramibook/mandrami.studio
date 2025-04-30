document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.toggle').forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  });