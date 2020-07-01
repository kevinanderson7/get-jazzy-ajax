$(document).ready(onReady);
// when the document is ready, an ajax is being sent to the server and a 'GET' request is being performed asking for the artist array.
function onReady() {
  $.ajax({
    type: 'GET',
    url: '/artist',
    //once the request is received by the server,
    // then the server sends back the artist array and each object of the
    //artist array (each artist) is appended to the DOM into a table that includes each object's info.
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      let artist = response[i];
      console.log(artist);

      $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
    }
  });

  // TODO Add ajax request for /songs and display on DOM
  $.ajax({
    type: 'GET',
    url: '/songs',
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      let songs = response[i];
      $('#songTableBody').append(`
                  <tr>
                      <td>${songs.title}</td>
                      <td>${songs.artist}</td>
                  </tr>
              `);
    }
  });
}
