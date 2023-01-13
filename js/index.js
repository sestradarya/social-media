

const menuItem = document.querySelectorAll(".menu-item")

const messagesNotifications = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')


// SIDEBAR

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item)
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } 
    else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector('#notifications .notification-count').style.display= 'none';
    }
  });
});


// MESSAGES

messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none'
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage)


// THEME/DISPLAY CUSTOMIZATION


const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

theme.addEventListener('click', openThemeModal);
