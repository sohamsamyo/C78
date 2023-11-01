var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://img.freepik.com/premium-vector/couple-grandparents-are-excited-go-out-somewhere-together_33070-6931.jpg", "https://classroomclipart.com/image/static7/preview2/happy-father-holds-his-sons-hand-60042.jpg", "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-brothers-clipart-pair-of-cartoon-boys-vector-png-image_6799569.png", "https://c8.alamy.com/comp/D256XJ/illustration-of-a-young-boy-together-with-his-elder-sister-D256XJ.jpg", "https://img.freepik.com/free-vector/mother-son-cartoon-character_1308-81610.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698624000&semt=ais"];
var names = ["...FAMILY BOOK...", "...GRANDFATHER...", "...FATHER...", "...BROTHER...", "...ELDER SISTER...", "...MOTHER..."];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 5
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }



  var updatedImage = [images[i]];



  var updatedName = [names[i]];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
