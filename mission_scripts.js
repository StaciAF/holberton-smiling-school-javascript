$(document).ready(function () {
    let authorID1 = 2465;
    let authorID2 = 3644;
    let authorID3 = 4623;
    let authorID4 = 4211;
    $('.openBox1').on('click', function () {
      $.ajax({
        url: 'https://reststop.randomhouse.com/resources/authors/' + authorID1,
        dataType: 'json',
        success: function (data) {
           details = data.spotlight
          $('#modal-content1').append(details), function () {
            $('#planModal').modal({ show: true });
          }
        }
      })
    })
      $('.openBox2').on('click', function () {
      $.ajax({
        url: 'https://reststop.randomhouse.com/resources/authors/' + authorID2,
        dataType: 'json',
        success: function (data) {
          details = data.spotlight
          $('#modal-content2').append(details), function () {
            $('#doModal').modal({ show: true });
          }
        }
      })
    })
    $('.openBox3').on('click', function () {
      $.ajax({
        url: 'https://reststop.randomhouse.com/resources/authors/' + authorID3,
        dataType: 'json',
        success: function (data) {
          details = data.spotlight
          $('#modal-content3').append(details), function () {
            $('#studyModal').modal({ show: true });
          }
        }
      })
    })
    $('.openBox4').on('click', function () {
      $.ajax({
        url: 'https://reststop.randomhouse.com/resources/authors/' + authorID4,
        dataType: 'json',
        success: function (data) {
          details = data.spotlight
          $('#modal-content4').append(details), function () {
            $('#actModal').modal({ show: true });
          }
        }
      })
    })
  });
  