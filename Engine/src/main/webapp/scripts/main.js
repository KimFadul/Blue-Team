$('#img0').click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img1").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img2").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img3").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img4").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img5").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});
$("#img6").click(function () {
    $(this).addClass('borderClass');
    $img = $(this).get();
});

$(".drag").click(function () {
    $(this).addClass('borderClass');
    $(this).append($img);

});
$(".drop").click(function () {
    $(this).append($img);
    $($img).removeClass('borderClass');

});

//global stuff
var currentHand = new Array();


var letters = new Array();
letters[0] = new Image();
letters[0].src = 'letter_A.png';
//$('letter_A.png').width(55);
//$('letter_A.png').height(55);

letters[1] = new Image();
letters[1].src = 'letter_B.png';

letters[2] = new Image();
letters[2].src = 'letter_C.png';

letters[3] = new Image();
letters[3].src = 'letter_D.png';

letters[4] = new Image();
letters[4].src = 'letter_E.png';

letters[5] = new Image();
letters[5].src = 'letter_F.png';

letters[6] = new Image();
letters[6].src = 'letter_G.png';

letters[7] = new Image();
letters[7].src = 'letter_H.png';

letters[8] = new Image();
letters[8].src = 'letter_I.png';

letters[9] = new Image();
letters[9].src = 'letter_J.png';

letters[10] = new Image();
letters[10].src = 'letter_K.png';

letters[11] = new Image();
letters[11].src = 'letter_L.png';

letters[12] = new Image();
letters[12].src = 'letter_M.png';

letters[13] = new Image();
letters[13].src = 'letter_N.png';

letters[14] = new Image();
letters[14].src = 'letter_O.png';

letters[15] = new Image();
letters[15].src = 'letter_P.png';

letters[16] = new Image();
letters[16].src = 'letter_Q.png';

letters[17] = new Image();
letters[17].src = 'letter_R.png';

letters[18] = new Image();
letters[18].src = 'letter_S.png';

letters[19] = new Image();
letters[19].src = 'letter_T.png';

letters[20] = new Image();
letters[20].src = 'letter_U.png';

letters[21] = new Image();
letters[21].src = 'letter_V.png';

letters[22] = new Image();
letters[22].src = 'letter_W.png';

letters[23] = new Image();
letters[23].src = 'letter_X.png';

letters[24] = new Image();
letters[24].src = 'letter_Y.png';

letters[25] = new Image();
letters[25].src = 'letter_Z.png';

//random number for shuffle
var numRand = Math.floor(Math.random() * 7);
//array for images in tile hand
var imgArray = new Array();

//method to shuffle array
function shuffleMe(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

$(function setHand() {
    $(document).ready(function () {
        var letters = new Array();
        var randLet = Math.floor(Math.random() * 26);
        $('#div0').prepend($(letters[randLet]));
        $('#div1').prepend($(letters[randLet]));
        $('#div2').prepend($(letters[randLet]));
        $('#div3').prepend($(letters[randLet]));
        $('#div4').prepend($(letters[randLet]));
        $('#div5').prepend($(letters[randLet]));
        $('#div6').prepend($(letters[randLet]));
    });
});

$(function exchange() {
    //jquery remove?
    $("#exchange").click(function () {

        var exit = prompt("Do you want to exchange some tiles?", "Yes");
        switch (exit.toUpperCase()) {
            case "NO":
                alert("Continue playing");
                break;
            case "YES":
                alert("Select how many tiles you want to exchange");

                var letters = new Array();
                letters[0] = new Image();
                letters[0].src = 'imgs/A.png';
                //$('letter_A.png').width(55);
                //$('letter_A.png').height(55);

                letters[1] = new Image();
                letters[1].src = 'imgs/B.png';

                letters[2] = new Image();
                letters[2].src = 'imgs/C.png';

                letters[3] = new Image();
                letters[3].src = 'imgs/D.png';

                letters[4] = new Image();
                letters[4].src = 'imgs/E.png';

                letters[5] = new Image();
                letters[5].src = 'imgs/F.png';

                letters[6] = new Image();
                letters[6].src = 'imgs/G.png';

                letters[7] = new Image();
                letters[7].src = 'imgs/H.png';

                letters[8] = new Image();
                letters[8].src = 'imgs/I.png';

                letters[9] = new Image();
                letters[9].src = 'imgs/J.png';

                letters[10] = new Image();
                letters[10].src = 'imgs/K.png';

                letters[11] = new Image();
                letters[11].src = 'imgs/L.png';

                letters[12] = new Image();
                letters[12].src = 'imgs/M.png';

                letters[13] = new Image();
                letters[13].src = 'imgs/N.png';

                letters[14] = new Image();
                letters[14].src = 'imgs/O.png';

                letters[15] = new Image();
                letters[15].src = 'imgs/P.png';

                letters[16] = new Image();
                letters[16].src = 'imgs/Q.png';

                letters[17] = new Image();
                letters[17].src = 'imgs/R.png';

                letters[18] = new Image();
                letters[18].src = 'imgs/S.png';

                letters[19] = new Image();
                letters[19].src = 'imgs/T.png';

                letters[20] = new Image();
                letters[20].src = 'imgs/U.png';

                letters[21] = new Image();
                letters[21].src = 'imgs/V.png';

                letters[22] = new Image();
                letters[22].src = 'imgs/W.png';

                letters[23] = new Image();
                letters[23].src = 'imgs/X.png';

                letters[24] = new Image();
                letters[24].src = 'imgs/Y.png';

                letters[25] = new Image();
                letters[25].src = 'imgs/Z.png';

                for (var i = 0; i < letters.length; i++) {
                    $(letters[i]).width(55);
                    $(letters[i]).height(55);
                    //$(letters[i]).id("img"+i);

                }

                var randLet = Math.floor(Math.random() * 26);

                var shuffledLetters = shuffleMe(letters);

                shuffled = shuffleMe(letters);
                $('#div0').empty().prepend($(shuffled[0]));
                $('#div1').empty().prepend($(shuffled[1]));
                $('#div2').empty().prepend($(shuffled[2]));
                $('#div3').empty().prepend($(shuffled[3]));
                $('#div4').empty().prepend($(shuffled[4]));
                $('#div5').empty().prepend($(shuffled[5]));
                $('#div6').empty().prepend($(shuffled[6]));


                $('img').click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img1").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img2").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img3").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img4").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img5").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                $("#img6").click(function () {
                    $(this).addClass('borderClass');
                    $img = $(this).get();
                });
                xyHand[i++] = $(this).attr('id');


                break;
        }


    });
});

//grab new tiles from bag
$(function switchTiles() {


});

//only problem is if you have words in play it recalls all
//the letters on the board
$(function shuffle() {
    $("#shuffle").click(function () {

        var imgArray = new Array();
        imgArray[0] = "#img0";
        imgArray[1] = "#img1";
        imgArray[2] = "#img2";
        imgArray[3] = "#img3";
        imgArray[4] = "#img4";
        imgArray[5] = "#img5";
        imgArray[6] = "#img6";
        var shuffled = new Array();
        shuffled = shuffleMe(imgArray);
        $('#div0').prepend($(shuffled[0]));
        $('#div1').prepend($(shuffled[1]));
        $('#div2').prepend($(shuffled[2]));
        $('#div3').prepend($(shuffled[3]));
        $('#div4').prepend($(shuffled[4]));
        $('#div5').prepend($(shuffled[5]));
        $('#div6').prepend($(shuffled[6]));
    });
});

$(function recall() {
    $("#recall").click(function () {
        var i = 0;
        var currentHand = new Array();
        $(".drag").find("img").each(function () {
            // grab the src "attribute"
            //this gets id of image
            var id = $(this).attr("src");
            // alert(id);
            //array full of srcs
            currentHand[i++] = $(this).attr('src');

            $(letters[i]).width(55);
            $(letters[i]).height(55);

        });
        var imArray = new Array();
        imArray[0] = "#img0";
        imArray[1] = "#img1";
        imArray[2] = "#img2";
        imArray[3] = "#img3";
        imArray[4] = "#img4";
        imArray[5] = "#img5";
        imArray[6] = "#img6";

        $('#div0').prepend($(imArray[0]));
        $('#div1').prepend($(imArray[1]));
        $('#div2').prepend($(imArray[2]));
        $('#div3').prepend($(imArray[3]));
        $('#div4').prepend($(imArray[4]));
        $('#div5').prepend($(imArray[5]));
        $('#div6').prepend($(imArray[6]));
    });
});

//get array of current tile hand layout then
//without this above then it unshuffles if you had shuffled
$(function getCurrentHand() {
    //var current = new Array();

    var current = new Array();
    var i = 0;
// 		$(".drag:has(img)").each(function () {
// 			current[i++] = $(this).attr('id');

//         });
    $(".drag").find("img").each(function () {
        // grab the src "attribute"
        //this gets id of image
        var id = $(this).attr("id");
        // alert(id);
        //array full of ids
        current[i++] = $(this).attr('id');


    });

});


//need to store tile placement and check if they are in valid spots
//change to buttons to click on for yes or no
$(function exit() {
    $("#exit").click(function () {
        var text;
        var exit = prompt("Are you sure you want to exit?", "Yes");
        switch (exit.toUpperCase()) {
            case "NO":
                alert("Continue playing");
                break;
            case "YES":
                alert("Bye!");
                //leave page
                //window.open('','_parent','');
                var win = window.open("about:blank", "_self")

                win.close()
                break;
        }
    });

});

//need to store tile placement and check if they are in valid spots
//place tiles
//can be annoying to do this everytime
$(function place() {

});

//change to buttons to click on for yes or no

//cant just play one word
$(function confirmed() {
    $("#confirmed").click(function () {

        var xyCoord = [];
        var xyHand = [];
        i = 0;
        var div;
        var wordPlayed = new Array();


        //send these 3 to engine
        var wordString;
        var firstCoord;
        var orientationWord;

        //this get me every image that is on board
        $(".drop").find("img").length;


        //checks to see where each image is placed
        $(".drop").find("#img0");
        $(".drop").find("#img1");
        $(".drop").find("#img2");
        $(".drop").find("#img3");
        $(".drop").find("#img4");
        $(".drop").find("#img5");
        $(".drop").find("#img6");

        //gets the coordinate id for the div containing an image
        var div0 = $(".drop:has(#img0)").attr('id');
        var div1 = $(".drop:has(#img1)").attr('id');
        var div2 = $(".drop:has(#img2)").attr('id');
        var div3 = $(".drop:has(#img3)").attr('id');
        var div4 = $(".drop:has(#img4)").attr('id');
        var div5 = $(".drop:has(#img5)").attr('id');
        var div6 = $(".drop:has(#img6)").attr('id');

        //gets coordinate
        //loops through board and gets all the coordinates
        $(".drop:has(img)").each(function () {
            // alert($(this).attr("id"));

            xyCoord[i++] = $(this).attr('id');


        });
        //gives me last
        var firstCoord = xyCoord[0];
        var secondCoord = xyCoord[1]

        var xy1 = firstCoord.split(",");
        //alert(xy1);
        var x1 = xy1[0];
        //alert(x1);
        var y1 = xy1[1];
//		    alert(y1);

        var xy2 = secondCoord.split(",");
        // alert(xy2);
        var x2 = xy2[0];
        // alert(x2);
        var y2 = xy2[1];
        // alert(y2);
        var y = y1 - y2;
        if (y == 0) {
            orientationWord = ("h");
        } else {
            orientationWord = ("v");

        }
        //alert(orientationWord);

        //	alert(firstCoord + " " + secondCoord);

        //change to get the whole state of the board so all coords and words then save it
        //compare old state of board to new state of board
        //subtract same elements and get only new ones (2d array)
        $(".drop").find("img").each(function () {
            // grab the src "attribute"
            //this gets id of image
            var id = $(this).attr("src");
            var newId = id.slice(5, -4);
            var b = "ball";
            b.slice(0, 2);
            // alert(newId);
            wordPlayed[i++] = newId;
            //send to engine
            //this is the word that was played
            //var wordPlayed = new Array();


        });

        var wordString = wordPlayed.join("");
        alert("Word Played: " + wordString);

        //check each div in hand to see if they have
        $(".drag").not(":has(img)").each(function () {
            //  $(".drag:not:has(img)").each(function () {

            //need to make new image clickable
            //need to add a state for the hand
            //every time play is pressed hand upadtes
            var letters = new Array();
            letters[0] = new Image();
            letters[0].src = 'imgs/A.png';
            $('#A').attr('src', 'imgs/A.png');

            //$('letter_A.png').width(55);
            //$('letter_A.png').height(55);

            letters[1] = new Image();
            letters[1].src = 'imgs/B.png';
            $('#B').attr('src', 'imgs/B.png');


            letters[2] = new Image();
            letters[2].src = 'imgs/C.png';
            $('#C').attr('src', 'imgs/C.png');


            letters[3] = new Image();
            letters[3].src = 'imgs/D.png';
            $('#D').attr('src', 'imgs/D.png');


            letters[4] = new Image();
            letters[4].src = 'imgs/E.png';
            $('#E').attr('src', 'imgs/E.png');


            letters[5] = new Image();
            letters[5].src = 'imgs/F.png';
            $('#F').attr('src', 'imgs/F.png');


            letters[6] = new Image();
            letters[6].src = 'imgs/G.png';
            $('#G').attr('src', 'imgs/G.png');


            letters[7] = new Image();
            letters[7].src = 'imgs/H.png';
            $('#H').attr('src', 'imgs/H.png');


            letters[8] = new Image();
            letters[8].src = 'imgs/I.png';
            $('#I').attr('src', 'imgs/I.png');


            letters[9] = new Image();
            letters[9].src = 'imgs/J.png';
            $('#imgJ').attr('src', 'imgs/J.png');


            letters[10] = new Image();
            letters[10].src = 'imgs/K.png';
            $('#imgK').attr('src', 'imgs/K.png');


            letters[11] = new Image();
            letters[11].src = 'imgs/L.png';
            $('#imgL').attr('src', 'imgs/L.png');


            letters[12] = new Image();
            letters[12].src = 'imgs/M.png';
            $('#imgM').attr('src', 'imgs/M.png');


            letters[13] = new Image();
            letters[13].src = 'imgs/N.png';
            $('#imgN').attr('src', 'imgs/N.png');


            letters[14] = new Image();
            letters[14].src = 'imgs/O.png';
            $('#imgO').attr('src', 'imgs/O.png');


            letters[15] = new Image();
            letters[15].src = 'imgs/P.png';
            $('#imgP').attr('src', 'imgs/P.png');


            letters[16] = new Image();
            letters[16].src = 'imgs/Q.png';
            $('#imgQ').attr('src', 'imgs/Q.png');


            letters[17] = new Image();
            letters[17].src = 'imgs/R.png';
            $('#imgR').attr('src', 'imgs/R.png');


            letters[18] = new Image();
            letters[18].src = 'imgs/S.png';
            $('#imgS').attr('src', 'imgs/S.png');


            letters[19] = new Image();
            letters[19].src = 'imgs/T.png';
            $('#imgT').attr('src', 'imgs/T.png');


            letters[20] = new Image();
            letters[20].src = 'imgs/U.png';
            $('#imgU').attr('src', 'imgs/U.png');


            letters[21] = new Image();
            letters[21].src = 'imgs/V.png';
            $('#imgV').attr('src', 'imgs/V.png');


            letters[22] = new Image();
            letters[22].src = 'imgs/W.png';
            $('#imgW').attr('src', 'imgs/W.png');


            letters[23] = new Image();
            letters[23].src = 'imgs/X.png';
            $('#imgX').attr('src', 'imgs/X.png');


            letters[24] = new Image();
            letters[24].src = 'imgs/Y.png';
            $('#imgY').attr('src', 'imgs/Y.png');


            letters[25] = new Image();
            letters[25].src = 'imgs/Z.png';
            $('#imgZ').attr('src', 'imgs/Z.png');


            for (var i = 0; i < letters.length; i++) {
                $(letters[i]).width(55);
                $(letters[i]).height(55);
            }

            var randLet = Math.floor(Math.random() * 26);

            //fills in random letters after you play hand
            $(this).prepend(letters[randLet]);
            xyHand[i++] = $(this).attr('id');

            $(letters[randLet]).attr('');

        });

        var currentHand = new Array();

        var i = 0;
//		 		$(".drag:has(img)").each(function () {
//		 			current[i++] = $(this).attr('id');

//		         });
        $(".drag").find("img").each(function () {
            // grab the src "attribute"
            //this gets id of image
            var id = $(this).attr("id");
            // alert(id);
            //array full of srcs
            currentHand[i++] = $(this).attr('src');

            $(letters[i]).width(55);
            $(letters[i]).height(55);

        });
        //alert(currentHand[0]);
        //alert(currentHand[1]);
        //alert(currentHand[2]);
        //alert(currentHand[3]);
        //alert(currentHand[4]);
        //alert(currentHand[5]);
        //alert(currentHand[6]);


        $('img').click(function () {
            $(this).addClass('borderClass');
            $img = $(this).get();
        });


//This is the Play request
        $.post("Servlet", { //needs variables for word, coordinates and direction (h or v)
            request: "play",
            word: wordString,
            coords: firstCoord + "," + secondCoord,
            direction: orientationWord
        }, function (responsetext) {
            alert(responsetext); // response text.
        });
    });
});