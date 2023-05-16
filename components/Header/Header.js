import {
    signOut,
  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


export default class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }


    
    subscribeToCart() {
        window.addEventListener('cartChanged', (event) => {
            
            this.render(event.detail.products.length);
        });
    }

    render(count) {
        const html = `

        <header class="header">
        <div class="container header__container">
            <button class="header__burger-btn" id="burger">
                <span></span><span></span><span></span>
            </button>
            <a href="index.html" class="logo">
                <img class="logo__img" src="/img/logo_ziel.png">
            </a>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <a class="menu__link" href="index.html">
                            Магазин
                        </a>
                    </li>
                    <li class="menu__item">
                        <a class="menu__link" href="about.html">
                            О нас
                        </a>
                    </li>
                    </li>
                    <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                        👜 ${count}
                    </div>
                    
                    <button class="logoutbutton" id="logoutbutton">
                        Logout
                    </button>
                </ul>
                </div> 
            </nav>
        </div>
        </header>
            `;

        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("burger").addEventListener("click", function() {
                document.querySelector("header").classList.toggle("open")
            })
        })

        ROOT_HEADER.innerHTML = html;

        const logoutbutton = document.getElementById('logoutbutton');
        logoutbutton.addEventListener("click", (e) => {
            signOut(window.auth)
              .then(() => {
                // Sign-out successful.
                alert("Вы вышли из системы!");
              })
              .catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
        
                alert(errorMessage);
              });
          });


    }
}


