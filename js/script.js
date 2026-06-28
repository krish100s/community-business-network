console.log("Community Business Website Loaded")
document.getElementById("myBusiness").innerText =
data.businessname;
const words = data.businessName.split(" ");

let initials = words[0][0];

if(words.length > 1){
    initials += words[1][0];
}

document.getElementById("logoInitials")
.innerText = initials.toUpperCase();