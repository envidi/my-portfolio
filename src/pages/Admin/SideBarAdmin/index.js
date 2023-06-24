import { useEffect } from "../../../utilities";
import styles from "./SidebarAdmin.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)


const SidebarAdmin = ()=>{

    useEffect(()=>{
        const aSideBar = document.querySelectorAll(`.${cx('a-side-bar')}`);
        
        const liSideBar = document.querySelectorAll(`.${cx('li-side-bar')}`);
        const subMenu = document.querySelectorAll(`.${cx('sub-menu')}`);
        const iconArrowDown = document.querySelectorAll(`.${cx('fa-chevron-down')}`);
        const iconArrowLeft = document.querySelectorAll(`.${cx('fa-chevron-left')}`);
        const array = []
// if(aSideBar){
    let isClick = false;
    aSideBar.forEach((element,index)=>{
        element.addEventListener("click",()=>{
            isClick=!isClick;
                                                     
            if(isClick ){
                array.push(index);
                if(array.length > 3){
                    array.splice(0, 1);
                }   
                const heightSubMenu = subMenu[index].offsetHeight + 45;
                liSideBar[index].style.height = heightSubMenu + "px" ;
                
                    iconArrowDown[index].style.display="block";
                    iconArrowLeft[index].style.display="none";

                
                               
            }
            else{
                liSideBar[array[array.length-1]].style.height = 45 + "px" ;
                
                    iconArrowDown[index].style.display="none";
                    iconArrowLeft[index].style.display="block";
                
            }
            
        })
    })


// }
const hidden = document.querySelector(`.${cx('hidden')}`);
let isHidden = false; 
// const menuBarAdmin = document.querySelector(`.${cx('menu-bar-admin')}`);
// hidden.addEventListener("click",()=>{
//     isHidden = true;  
//     return  changeMenuBar(isHidden)
// })
// menuBarAdmin.addEventListener("click",()=>{
//     isHidden = false;
//     return  changeMenuBar(isHidden)

// })
// function changeMenuBar(isHidden){
//     const sideBar = document.querySelector(`.${cx('side-bar')}`);
//     const dashBoard = document.querySelector(`.${cx('dash-board')}`);
//     if(isHidden){
//         sideBar.classList.add(`${cx('hidden-side-bar')}`);
//         dashBoard.classList.add(`${cx('widen')}`)
//     }
//     else{
//         sideBar.classList.remove(`${cx('hidden-side-bar')}`);
//         dashBoard.classList.remove(`${cx('widen')}`)
//     }
// }

    })
    return ` <div class=${cx('side-bar')} >
    <div class=${cx('block')}>
      <div class="image">
        <a href="">

          <img src="" alt="" />
        </a>
      </div>
      <span>Portfolio</span>
    </div>
    
    
    <div class=${cx('contain-list-menu')}>
      <ul>
       
        <!-- --------------------------------------- -->
        <li class=${cx('li-side-bar')}>
          <a  class=${cx('a-side-bar')}>
            <div>
              <i class="fa-solid fa-cart-shopping"></i>
              <span>Projects</span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <ul class=${cx('sub-menu')})}>
            <li>
              <a href="/admin">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Quản lý Projects</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#/admin/add">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Thêm mới Project</span>
                </div>
              </a>
            </li>
          </ul>
        </li>
       
        <li class=${cx('li-side-bar')}>
          <a  class=${cx('a-side-bar')}>
            <div>
              <i class="fa-solid fa-list"></i>
              <span>Danh mục</span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->

          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Quản lý danh mục</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Thêm danh mục</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <!-- ----------------------------- -->
        <li class=${cx('li-side-bar')}>
          <a href="#" class=${cx('a-side-bar')}>
            <div>
              <i class="fa-solid fa-users"></i>
              <span>Tài khoản</span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->
          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Quản lý tài khoản</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Thêm tài khoản</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <!-- ----------------------------- -->
        <li class=${cx('li-side-bar')}>
          <a href="#" class=${cx('a-side-bar')}>
            <div>
              <i class="fa-solid fa-mug-hot"></i>
              <span>Sản phẩm</span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->

          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Quản lý sản phẩm</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Thêm sản phẩm</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <!-- ----------------------------- -->
           <!-- ----------------------------- -->
           <li class=${cx('li-side-bar')}>
          <a href="#" class=${cx('a-side-bar')}>
            <div>
            <i class="fa-solid fa-comment"></i>
              <span>Bình luận</span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->

          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                <i class="fa-regular fa-circle"></i>
                  <span>Quản lý bình luận</span>
                </div>
              </a>
            </li>
          
          </ul>
        </li>

        <!-- ----------------------------- -->
        <li class=${cx('li-side-bar')}>
          <a href="#" class=${cx('a-side-bar')}>
            <div>
              <i class="fa-solid fa-list"></i>
              <span>Thống kê </span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->

          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Thống kê</span>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Biểu đồ</span>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <!-- ----------------------------- -->
        <li class=${cx('li-side-bar')}>
          <a href="#" class=${cx('a-side-bar')}>
            <div>
            <i class="fa-solid fa-address-book"></i>
              <span>Liên hệ </span>
            </div>
            <i class="fa-solid fa-chevron-down d-none"></i>
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <!-- --------------- menu con --------------------- -->

          <ul class=${cx('sub-menu')}>
            <li>
              <a href="">
                <div>
                  <i class="fa-regular fa-circle"></i>
                  <span>Danh sách liên hệ</span>
                </div>
              </a>
            </li>
        <!-- ----------------------------- -->

      </ul>
    </div>
    <button class=${cx('hidden')}>
      <i class="fa-solid fa-arrow-left"></i>
    </button>
  </div>`
}
export default SidebarAdmin