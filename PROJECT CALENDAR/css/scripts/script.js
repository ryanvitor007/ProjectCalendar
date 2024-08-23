document. querySelectorAll ('.hour').forEach(function(hour){
    hour.addEventListener('click', function(){
        openModal(hour);

    });
});

function openModal(hour) {
    var modal = document.getElementById('event-modal');
    var closeModal = document.querySelector('.close');
    var addButton = document.getElementById('add-event');
    var eventTitleInput = document.getElementById('event-title');

    modal.style.display = 'block';
    
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal){
            modal.style.display = 'none';
        }

    }

     addButton.onclick = function() {
        var eventTitle = eventTitleInput.ariaValueMax.trim();
        if (eventTitle) {
            addEvent (hour, eventTitle);           
            modal.style.display = 'none';
            eventTitleInput.value = '';
        } else {
            alert('Por favor, insira um título para o evento.');
        }    
    }
}

function addEvent(hour, title) {
    var event = document.createElement('div');
    event.className = 'event';
}