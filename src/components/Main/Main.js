import classNames from "classnames/bind";
import styles from "./main.module.scss";
import { useEffect,award as awards, myServices } from "../../utilities";
import Myservices from "./MyServices";

const cx = classNames.bind(styles);

const Main =()=>{

    useEffect(()=>{
        
        const arrText = [ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]
        const textAnimation = document.querySelector(`.${cx('text-animation')}`);
        const splitWord = (word) =>{
            const split = word.split("")
            return split;
        }
      
       
        let timerID;
        
        let currentPhraseIndex = 0;
        let currentPhrase = arrText[currentPhraseIndex];
        const animateText = ()=>{                         
                let counter = 0 ; 
                const check = splitWord(currentPhrase);                
                let counter2 = 1;
            const startAnimation = ()=>{
            timerID = setInterval(()=>{
                    counter++ ;
                  
                    sliceWord(check)
                },200)
            }

            

            const sliceWord = (word)=>{                               
                
                if( counter > word.length  ){                            
                   
                    
                    clearInterval(timerID);
                    setTimeout(()=>{

                        ++counter2                                                                                                                                       
                        textAnimation.innerHTML = word.slice(0,-counter2).join('');                        
                        counter = 0 ;                                               
                        currentPhraseIndex = (currentPhraseIndex + 1) % arrText.length;
                        
                        currentPhrase = arrText[currentPhraseIndex];  
                        animateText() 
                       },1500)
                                                                                                                                                                                              
                }
                else{
        
                    textAnimation.innerHTML = word.slice(0,counter).join('')
                }
            } 
            startAnimation()
        }
        animateText()
            
      
    
  

    
            // const phrases = [ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ];
            //     let currentPhraseIndex = 0;
            // let currentPhrase = phrases[currentPhraseIndex];
            // let currentPosition = 0;
            // const delay = 100;
            // let timerID;
                
            // const animateText = () => {
            // timerID = setInterval(() => {
            //     sliceWord(currentPhrase);
            // }, 100);
            // };
            
            // const sliceWord = (word) => {
            // const check = splitWord(word);
            
            // if (currentPosition < check.length) {
            //     const nextCharacter = check[currentPosition];
            //     textAnimation.innerHTML += nextCharacter;
            //     currentPosition++;
            // } else {
            //     clearInterval(timerID);
            //     setTimeout(() => {
            //         textAnimation.innerHTML = '';
            //     currentPosition = 0;
            //     currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            //     currentPhrase = phrases[currentPhraseIndex];
            //     console.log(currentPhrase)
            //     animateText();
            //     }, 1500);
            // }
            // };
            
            // animateText();
    })

    return `<div class=${cx('main')}>

                
                <div class=${cx('banner')}>
                <span class=${cx('title-banner')}>
                    Discover my Amazing                      
                </span>
                <span class=${cx('title-banner')}>
                    Art Space!                     
                </span>
                <div class=${cx('introduce-animation')}>
                    < <span class=${cx('code')}>code</span> >
                  I build <span class=${cx('text-animation')}> web interfaces. </span>
                 ${  '| <'} <span class=${cx('code')}>/code</span> >
                </div>
                <div class=${cx('explore')}>explore now</div>
                <div class=${cx('avatar-banner')}>
                    <img src="https://res.cloudinary.com/dsmy4ogdj/image/upload/v1687601928/portfolio/l3kwliwctop1byhf2tnj.png"/>
                </div>
                
            </div>
            <div class=${cx('award')}>
            ${awards.map((award)=>{
                const { name , number} = award
                return ` <div class=${cx('award-block')}>
                <span class=${cx('number-award')}>
                    ${number}
                </span>
                <span class=${cx('name-award')}>
                    ${name}
                </span>
            </div>`
            }).join("")}
                   
            </div>
            ${Myservices()}
            <footer class=${cx('footer')}>
                <span class=${cx('footer-block')}>© 2020 Artur Carter</span>
                <span class=${cx('footer-block')}>Template author:  Nazar Miller</span>
            </footer>
                
                


    </div>`;
}
export default Main;