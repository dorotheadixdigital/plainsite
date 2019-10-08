document.addEventListener('DOMContentLoaded', function () {
   



    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `<div class="mdc-tab-bar mdc-top-app-bar mdc-top-app-bar--fixed" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">

                <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='index.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label"><img tabindex="0" style="width:2rem" src="images/sunflower.png" aria-label="home"></span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='conversation.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Brainstorms</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>   


                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='population.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Population Sensing</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>   
            

                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='nature.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Nature Interactive</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>  

                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='organizing.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Co-Organizing Space</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>  

                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='resources.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Resources</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

  


               </div>
            </div>
        </div>
    </div>
    <div class="mdc-top-app-bar--fixed-adjust"></div>`
    
    const footer = document.getElementById('footerDiv');


<!-- https://mycyberuniverse.com/add-social-media-buttons-to-your-website.html -->


    footer.innerHTML = 

    `<div class="footer">

    
    <div class="spacemaker">
<br>
<br>
    
    <div class="mdc-tab-bar mdc-tab-bar2 mdc-top-app-bar--fixed" role="tablist">

        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">


            <button i class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://github.com/dorotheadixdigital/'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="https://github.com/dorotheadixdigital/">
                <img src="images/github.png" alt="github" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            <button i class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://www.meetup.com/Triangle-Code-for-America'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="https://www.meetup.com/Triangle-Code-for-America/">
                <img src="images/meetup.png" alt="meetup" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            <button i class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='mailto:daughtersofdorotheadix@gmail.com/'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="mailto:daughtersofdorotheadix@gmail.com/">
                <img src="images/mail.png" alt="mail" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            


               </div>
            </div>
        </div>
    </div>
    
</div>
</div>`

})