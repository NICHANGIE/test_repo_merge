import React from 'react';
import { Link } from 'react-router-dom';
const SeeAll = () => {
  return (
    <div className="uk-section">
      <div className="uk-container ">
        <div className="uk-child-width-1-2@m" data-uk-grid>
          <div>
            <form className="uk-search uk-search-default uk-width-1-1">
              <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand">
                  <input className="uk-input uk-form-large uk-border-rounded-medium" type="search" placeholder="Search anything" />
                </div>
                <div className="uk-width-auto">
                  <button className="uk-button uk-button-large uk-button-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
          <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-margin-medium-top grid-template-columns: repeat(3, minmax(0, 1fr))" >
      <div>
       <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./sicklecell.png" alt="sickle cell image"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            <div class="uk-position-small uk-position-top-left">
            </div>            
          </div>
          <div class="uk-card-body grid grid-cols-3 gap-4">
            <div class="uk-text-muted uk-text-small">Help collect funds for sickle cell anaemia patients <li><Link to ="/readmore">Read more</Link></li></div>
            
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
            <div class="uk-card-media-top uk-inline uk-light">
              <img src="./heartpatient.png" alt="young sheldom's image"/>
              <div class="uk-position-cover uk-overlay-xlight"></div>
              <div class="uk-position-small uk-position-top-left">
                
              </div>        
            </div>
            <div class="uk-card-body">
              <div class="uk-text-muted uk-text-small">Help young sheldom perform his heart surgery <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a> 
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">Help Anne beat cancer <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>    
        </div>
       </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">it is possible if we come together he can overcome the kidney issue <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
          
          
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">Skin diseases are very dangerous help brother Jonathan <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
          
          
        </div>
      </div>
      <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
        <div class="uk-card-media-top uk-inline uk-light">
          <img src="./cancer.png" alt="an image of a patient with cancer"/>
          <div class="uk-position-cover uk-overlay-xlight"></div>
          
        </div>
        <div class="uk-card-body">
          <div class="uk-text-muted uk-text-small">Even elders need happy life, madam Jane can be cured of lung disease <li><Link to ="/readmore">Read more</Link></li></div>
          <a href="donate.html"><button class="green-button">Donate now</button></a>
        </div>
        
        
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">Help Anne beat cancer <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
          
          
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">Help Anne beat cancer <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
          
          
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-small uk-card-default uk-card-hover uk-border-rounded-large uk-overflow-hidden">
          <div class="uk-card-media-top uk-inline uk-light">
            <img src="./cancer.png" alt="an image of a patient with cancer"/>
            <div class="uk-position-cover uk-overlay-xlight"></div>
            
          </div>
          <div class="uk-card-body">
            <div class="uk-text-muted uk-text-small">Help Anne beat cancer <li><Link to ="/readmore">Read more</Link></li></div>
            <a href="donate.html"><button class="green-button">Donate now</button></a>
          </div>
          <div class="uk-text-center uk-margin-large-top">
      <ul class="uk-pagination uk-flex-center uk-margin-remove">
        <li><a class="uk-button uk-button-primary uk-disabled" href="#">1</a></li>
        <li><a class="uk-button uk-button-primary-light" href="#">2</a></li>
        <li><a class="uk-button uk-button-primary-light" href="#">3</a></li>
        <li><a class="uk-button uk-button-primary-light" href="#">4</a></li>
        <li><a class="uk-button uk-button-primary-light" href="#">Next</a></li>
      </ul>    
    </div>      
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAll;
