import classNames from "classnames/bind";
import styles from "./myservice.module.scss";
import { useEffect, myServices } from "../../../utilities";
const cx = classNames.bind(styles);
const Myservices = ()=>{
    return `
    <h3>My Services</h3>
    
    <div class=${cx('my-services')}>

    ${myServices.map((service)=>{
        const {name , desc} = service
        return `
        <div class=${cx('myservices-block')}>
            <div class=${cx('name-services')}>
               ${name}
            </div>
            <div class=${cx('desc-services')}>
               ${desc}
            </div>
            <div class=${cx('order-now')}>
                ORDER NOW <span class=${cx("icon-oredernow")}><i class="fa-solid fa-chevron-right"></i></span>
            </div>
        </div>`
    }).join('')}
               
    </div>`
}
export default Myservices