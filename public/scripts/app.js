console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    console.log("jQuery up");
});

var url = "http://localhost:3000/api/art"

$('form').on( 'submit', function( e ) {
    e.preventDefault()
    console.log("click")
  });

$.ajax({
    method: 'GET',
    url: `${url}`,
    data: {
    },
    success: function( response ) {
        console.log( response );
        console.log( response[2].img );
        // var.imageURL = response.

        // for(i=0; i < response.length ; i++) {
        //     var imageUrl = response[i].img;
        //     $('.allArt').append(`<img src=>`);
        //     $('.allArt img').attr('src', `${imageUrl}`);
        // }

        var images = [];
        for(i=0; i < response.length; i++) {
            var random = `/graffiti?random=${i}`
            images.push(`<img src="${response[i].img}${random}">`);
            // images.push(`<img src="https://loremflickr.com/320/240/graffiti?random=${i}">`);
        }
        console.log(images)

        for(i=0; i < images.length ; i++) {
            var imageAppend = images[i];
            // var random = `/graffiti?random=${i}`
            $('.allArt').append(imageAppend);
        }
        
        $('img').on('click', function(){
            $('img').each(function(){
            $(this).toggleClass('imgToggle')
            });
            $(this).toggleClass('imgToggle')
        });

        


        // var imageUrl = response[2].img;
        // $('body').append('<img src=>');
        // $('body img').attr('src', `${imageUrl}`);
        // },
    },
    error: function() {
        console.log('There was an error getting data from api/art');
    }
});


// var date = $('input[type="date"]').val();
// var dateKey = `date=${date}&`;
// var startDate = `start_date=${date}&`;
// var endDate = "end_date=2018-11-19&";


/////////// FORM CREATE ART ///////////////////////////
// $('#create').click(function(e){
//     e.preventDefault()
//     $.ajax({
//         method: 'POST',
//         url: `${url}`,
//         data: $("#form").serialize()
//         ,
//         success: function( response ) {
//             console.log( response ); 
//             console.log ($('#img[type="text]').val())  
//             console.log( $("#form").serialize())     
     
//         },
//         error: function() {
//             console.log('There was an error creating art');
//         }
//     })
// });


// $( 'form').on( "submit", function( event ) {
//     console.log( $( this ).serialize().val() );
//   });