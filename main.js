const unread = Array.from(document.querySelectorAll("[data-read=false]"));
const notifsTotal = document.querySelector(".notifs__total");
document.querySelector(".notifs__mark-all").addEventListener("click", markAsRead);
console.log(unread)


function markAsRead(){
  console.log("hi")
  unread.forEach((notification, index) => {
      notification.setAttribute("data-read", true);
      // unread.pop(element);
  })
  // if(unread.length === 0){
  //   notifsTotal.textContent = 0;
  //   notifsTotal.style.display = "none";
  // }
  notifsTotal.textContent = 0;
  notifsTotal.style.display = "none";
}

