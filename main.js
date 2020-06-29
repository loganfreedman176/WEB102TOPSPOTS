$(document).ready(function() {
    $.getJSON('data.json', 
    function(data) {
        $(data).each(function(i, tData) {

            var link = document.createElement('a');
            link.innerText = 'Open in Google Maps';
            link.setAttribute('href', 'https://www.google.com/maps?q=' + tData.location);
            

            $('#tableBody').append($('<tr>')
                .append($('<td>').append(tData.name))
                .append($('<td>').append(tData.description))
                .append($('<td>').append((link)))
                
                );

            
        });
            
        });
    

});